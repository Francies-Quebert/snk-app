import { Href } from "expo-router";
import { ViewStyle } from "react-native";
import { ButtonVariant } from "../button/Button";

// Define all possible component types
export type ComponentType = "promoCarousel" | "textWithIconRow" | "takeoverCard" | "promoHeroCard" | "promoHeroGrid" | "productCardCarousel";

export type Config = {
  priority?: number;
  visible?: boolean;
  style?: ViewStyle;
  autoplay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  height?: number;
  showControls?: boolean;
};
// Base section type with required fields
type BaseSection = {
  id: string;
  type: "carousel" | "static" | "standalone";
  component: ComponentType;
  config?: Config;
};

export type PromoCarouselData = {
  id: string;
  image: any; // Using 'any' for require() images
  title: string;
  subtitle?: string;
  link?: Href;
  code: string;
};

export type IconLibrary = "feather" | "materialCommunity";

export type TextWithIconData = {
  id: string;
  icon: { name: string; type: IconLibrary };
  title: string;
  subtitle: string;
};

export type TakeoverCardData = {
  id: string;
  title: string;
  image: string;
};

export type PromoHeroCardData = {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  btnText?: string;
  btnType?: ButtonVariant;
  link?: Href;
};

export type ProductData = {
  id: string;
  brand: string;
  name: string;
  image: string;
  link: Href;
  priceRange: string;
  rating: number;
  reviews: number;
  soldToday?: string;
  quickBuy?: boolean;
};

// Discriminated union type for all sections
export type HomepageSection =
  | (BaseSection & { component: "promoCarousel"; data: PromoCarouselData[] })
  | (BaseSection & { component: "textWithIconRow"; data: TextWithIconData[] })
  | (BaseSection & { component: "takeoverCard"; data: TakeoverCardData[] })
  | (BaseSection & { component: "promoHeroCard"; data: PromoHeroCardData[] })
  | (BaseSection & { component: "promoHeroGrid"; data: PromoHeroCardData[] })
  | (BaseSection & { component: "productCardCarousel"; data: ProductData[] });
