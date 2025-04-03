import { View, StyleSheet } from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "@/styles/theme";
import Text from "../custom-text/Text";
import { Link } from "expo-router";
import { IconLibrary, TextWithIconData } from "../home-render/types";

export type PromoTextWithIconProps = {
  data: TextWithIconData;
};

const iconMap: Record<IconLibrary, any> = {
  feather: Feather,
  materialCommunity: MaterialCommunityIcons,
};
const PromoTextWithIcon = ({ data }: PromoTextWithIconProps) => {
  const { icon, title, subtitle } = data;

  const DynamicIcon = iconMap[icon.type];

  return (
    <Link href="/">
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <DynamicIcon name={icon.name} library={icon.type} size={24} />
        </View>
        <View style={styles.textContainer}>
          <Text color="dark-primary" style={{ textTransform: "uppercase", letterSpacing: 2 }} size="xs">
            {title}
          </Text>
          <Text color="dark-primary" size="xs" weight="thin">
            {subtitle}
          </Text>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: theme.spacing.small,
    height: 45,
  },
  iconContainer: {
    paddingHorizontal: theme.spacing.medium,
  },
  textContainer: {
    width: "100%",
  },
});

export default PromoTextWithIcon;
