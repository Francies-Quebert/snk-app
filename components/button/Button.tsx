import { StyleSheet, ViewStyle, Pressable, StyleProp } from "react-native";
import React from "react";
import Text from "../custom-text/Text";
import { theme } from "@/styles/theme";
import { Href, Link } from "expo-router";

export type ButtonVariant = "solid" | "outlined" | "link";

type ButtonProps = {
  title: string;
  href: Href;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
};

export const Button: React.FC<ButtonProps> = ({ title, href, variant = "solid", style }) => {
  return (
    <Pressable testID="button-container" style={({ pressed }) => [styles.base, variantStyles[variant], pressed && styles.pressed, style]}>
      <Link href={href}>
        <Text weight="bold" style={[textStyles[variant]]}>
          {title}
        </Text>
      </Link>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

const variantStyles = StyleSheet.create({
  solid: {
    backgroundColor: theme.colors["dark-primary"],
  },
  outlined: {
    borderWidth: 1,
    borderColor: theme.colors["dark-primary"],
  },
  link: {},
});

const textStyles = StyleSheet.create({
  solid: {
    color: "#ffffff",
  },
  outlined: {
    color: theme.colors["dark-primary"],
  },
  link: {
    color: theme.colors["dark-primary"],
    textDecorationLine: "underline",
  },
});
