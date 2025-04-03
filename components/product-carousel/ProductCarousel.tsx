import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../custom-text/Text";
import SwiperCarousel from "../carousel/Carousel";
import ProductCard from "./product-card/ProductCard";
import { Config, ProductData } from "../home-render/types";
import { Button } from "../button/Button";
import { theme } from "@/styles/theme";

type ProductCarouselProps = {
  data: ProductData[];
  config?: Config;
};
const ProductCarousel = ({ data, config }: ProductCarouselProps) => {
  return (
    <View>
      <Text style={styles.header} size="xl">
        TRENDING
      </Text>
      <SwiperCarousel
        height={config?.height}
        data={data}
        renderItem={(item) => <ProductCard data={item} />}
        autoPlay={config?.autoplay}
        autoPlayInterval={10000}
        infiniteScroll={true}
        showControls={config?.showControls}
        showBullets={config?.showIndicators}
      />
      <Button title={"SHOP NOW"} href={"/"} style={styles.footer} />
    </View>
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
  },
  footer: { width: 180, alignSelf: "center", margin: theme.spacing.large },
});
