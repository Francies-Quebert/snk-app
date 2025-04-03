import { View, StyleSheet } from "react-native";
import React from "react";
import { ImageBackground } from "expo-image";
import { PromoCarouselData } from "../home-render/types";
import Text from "../custom-text/Text";
import { theme } from "@/styles/theme";
import { Link } from "expo-router";
import { Button } from "../button/Button";

type PromoBannerProps = {
  data: PromoCarouselData;
};

const PromoBanner = ({ data }: PromoBannerProps) => {
  const { image, title, subtitle, link = "/", code } = data;
  return (
    <View>
      <Link href={link}>
        <ImageBackground source={image} style={styles.imageBackground}>
          <View style={styles.innerContainer}>
            <Text color="black" weight="thin" style={styles.titleText}>
              {title}
            </Text>
            <Text size="xxl" color="black" weight="medium" style={styles.subtitleText}>
              {subtitle}
            </Text>
            <Text color="black" weight="thin" size="xl" style={styles.codeText}>
              Use Code:{"  "}
              <Text size="xl">{code}</Text>
            </Text>
            <Button title={"SHOP NOW"} href="/" />
          </View>
        </ImageBackground>
      </Link>
      <View>
        <Text size="sm" color="black" weight="thin" style={styles.bottomText}>
          Online only.{" "}
          <Link href={"/"}>
            <Text size="sm" weight="thin" style={styles.underlineText}>
              T&Cs & exclusions apply.
            </Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    paddingVertical: 46,
    paddingHorizontal: theme.spacing.small,
  },
  innerContainer: {
    paddingHorizontal: theme.spacing.large,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    marginBottom: theme.spacing.small,
    letterSpacing: 4,
  },
  subtitleText: {
    textAlign: "center",
    marginVertical: theme.spacing.small,
    letterSpacing: 4,
  },
  codeText: {
    marginBottom: theme.spacing.large,
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
    letterSpacing: 2,
  },
  bottomText: {
    textAlign: "center",
    marginVertical: theme.spacing.small,
  },
  underlineText: {
    textDecorationLine: "underline",
  },
});

export default PromoBanner;
