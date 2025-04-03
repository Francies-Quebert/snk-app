import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "../custom-text/Text";
import { theme } from "@/styles/theme";

type TextBannerProps = {
  text: string;
  codeText: string;
  linkText: string;
};

const TextBanner = ({ text, codeText, linkText }: TextBannerProps) => {
  return (
    <View style={styles.container}>
      <Text color="white" style={styles.textContainer}>
        {text}
        <>
          {" "}
          <Text weight="bold" color="white">
            {codeText}
          </Text>
          {" - "}
          <Text color="white" weight="thin" style={styles.linkText}>
            {linkText}
          </Text>
        </>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.pink,
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.medium,
  },
  textContainer: {
    textAlign: "center",
    alignSelf: "center",
  },
  linkText: { textDecorationLine: "underline" },
});
export default React.memo(TextBanner);
