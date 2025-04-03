import { HomepageSection } from "@/components/home-render/types";
import { promoHeroCardData } from "./promo-hero-card";
import { promoHeroGridCards } from "./promo-hero-grid-data";
import { products } from "./product-data";

export const homepageData: HomepageSection[] = [
  {
    id: "delivery-info",
    type: "carousel",
    component: "textWithIconRow",
    data: [
      {
        id: "DIK000",
        icon: { name: "truck", type: "feather" },
        title: "Free UK Standard Delivery",
        subtitle: "On all orders over £25",
      },
      {
        id: "DIK001",
        icon: { name: "arrow-u-right-top", type: "materialCommunity" },
        title: "100% Satisfaction Guaranteed :",
        subtitle: "Not happy? Just send it back",
      },
    ],
    config: {
      autoplay: true,
      interval: 8000,
      showIndicators: false,
      height: 60,
      showControls: false,
    },
  },
  {
    id: "promo-banner-1",
    type: "static",
    component: "promoCarousel",
    data: [
      {
        id: "PBK000",
        image:
          "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Library-Sites-spacenk-global/default/dw283ea0f8/pd_homepages/24_WK47/20-off-trending-beauty-spacenk.jpg",
        title: "JUST FOR YOU",
        subtitle: "ENJOY 15% OFF YOUR FIRST ORDER",
        code: "FIRST15",
        link: "/",
      },
    ],
    config: {
      autoplay: true,
      interval: 5000,
      showIndicators: true,
    },
  },
  {
    id: "takeover-phlur-1",
    type: "static",
    component: "takeoverCard",
    data: [
      {
        id: "TBK000",
        title: "TAKEOVER",
        image: "https://www.spacenk.com/on/demandware.static/-/Library-Sites-spacenk-global/default/dw118cd392/images/Phlur-toggle-logo.png",
      },
    ],
  },
  {
    id: "promo-hero-1",
    type: "carousel",
    component: "promoHeroCard",
    data: promoHeroCardData,
    config: {
      autoplay: true,
      interval: 8000,
      showIndicators: true,
      height: 540,
      showControls: false,
    },
  },
  {
    id: "product-1",
    type: "standalone",
    component: "productCardCarousel",
    data: products,
    config: {
      autoplay: false,
      interval: 8000,
      showIndicators: false,
      height: 540,
      showControls: true,
    },
  },
  {
    id: "promo-hero-grid-1",
    type: "static",
    component: "promoHeroGrid",
    data: promoHeroGridCards,
  },
];
