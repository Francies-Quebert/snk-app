import React from "react";
import PromoTextWithIcon from "../promo-text-with-icon/PromoTextWithIcon";
import { ComponentType, Config } from "./types";
import PromoBanner from "../promo-banner/PromoBanner";
import TakeoverCard from "../takeover-card/TakeoverCard";
import PromoHeroCard from "../promo-hero-card/PromoHeroCard";
import PromoHeroGridCard from "../promo-hero-grid/PromoHeroGridCard";
import ProductCarousel from "../product-carousel/ProductCarousel";

// Component map with proper typing
export const componentMap: Record<ComponentType, React.FC<{ data: any; config?: Config }>> = {
  textWithIconRow: PromoTextWithIcon,
  promoCarousel: PromoBanner,
  takeoverCard: TakeoverCard,
  promoHeroCard: PromoHeroCard,
  promoHeroGrid: PromoHeroGridCard,
  productCardCarousel: ProductCarousel,
};
