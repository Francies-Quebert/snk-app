import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";
import React from "react";
import { PromoHeroCardData } from "../home-render/types";
import { Image } from "expo-image";
import { Link } from "expo-router";
import Text from "../custom-text/Text";
import { Button } from "../button/Button";
import { theme } from "@/styles/theme";

type PromoHeroCardProps = {
  data: PromoHeroCardData;
  style?: StyleProp<ViewStyle>;
  btnStyle?: StyleProp<ViewStyle>;
};
const PromoHeroCard = ({ data, style, btnStyle }: PromoHeroCardProps) => {
  const { image, description, subtitle, title, btnText = "SHOP NOW", btnType, link = "/" } = data;
  return (
    <Link href={link}>
      <View style={[styles.container, style]}>
        <Image style={styles.image} source={image} />
        <View style={styles.textContainer}>
          <Text style={[styles.text]} color="dark-primary">
            {subtitle}
          </Text>
          <Text style={[styles.text]} weight="bold" color="dark-primary" size="lg">
            {title}
          </Text>
          <Text weight="thin" size="sm" style={[styles.text]} color="dark-primary">
            {description}
          </Text>
          <Button title={btnText} href={link} variant={btnType} style={[styles.btnContainer, btnStyle]} />
        </View>
      </View>
    </Link>
  );
};

export default PromoHeroCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f6f2ed",
  },
  image: {
    height: 300,
    width: "100%",
  },
  textContainer: {
    padding: theme.spacing.medium,
  },
  btnContainer: {
    marginVertical: theme.spacing.medium,
  },
  text: {
    letterSpacing: 2,
    marginBottom: theme.spacing.medium,
    textAlign: "left",
  },
});
