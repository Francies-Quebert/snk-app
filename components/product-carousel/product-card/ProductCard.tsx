import { View, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { ProductData } from "@/components/home-render/types";
import { Link } from "expo-router";
import { Button } from "@/components/button/Button";
import { theme } from "@/styles/theme";
import Text from "@/components/custom-text/Text";

type ProductCardProps = {
  data: ProductData;
};
const ProductCard = ({ data }: ProductCardProps) => {
  const { image, link, quickBuy, name, brand, priceRange } = data;

  return (
    <View style={styles.container}>
      <Link href={link}>
        <Image style={styles.image} source={image} />
      </Link>
      <View style={styles.textContainer}>
        {quickBuy && <Button style={styles.quickBuy} variant="outlined" title="QUICK BUY" href={"/"} />}
        <Text size="sm" style={styles.name}>
          {name}
        </Text>
        <Text weight="thin">{brand}</Text>
        <Text size="sm">{priceRange}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
  },
  image: {
    height: 350,
    width: "100%",
  },
  quickBuy: {
    marginVertical: theme.spacing.large,
    width: "100%",
  },
  name: { textTransform: "uppercase" },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
