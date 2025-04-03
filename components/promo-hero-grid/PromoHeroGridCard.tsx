import { StyleSheet, View } from "react-native";
import React from "react";
import { PromoHeroCardData } from "../home-render/types";
import PromoHeroCard from "../promo-hero-card/PromoHeroCard";
import { theme } from "@/styles/theme";

type PromoHeroGridCardProps = {
  data: PromoHeroCardData;
};
const PromoHeroGridCard = ({ data }: PromoHeroGridCardProps) => {
  return (
    <View>
      <PromoHeroCard data={data} style={styles.container} btnStyle={styles.btnStyle} />
    </View>
  );
};

export default PromoHeroGridCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: theme.spacing.large,
  },
  btnStyle: {
    alignItems: "flex-start",
    paddingHorizontal: 0,
    marginVertical: 0,
  },
});
