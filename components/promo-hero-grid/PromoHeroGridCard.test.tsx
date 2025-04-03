import React from "react";
import { render } from "@testing-library/react-native";
import PromoHeroGridCard from "./PromoHeroGridCard";
import { PromoHeroCardData } from "../home-render/types";

describe("PromoHeroGridCard", () => {
  const mockData: PromoHeroCardData = {
    id: "1",
    title: "Test Promo",
    description: "This is a test promo card",
    image: "https://example.com/image.jpg",
    btnText: "Click Me",
    subtitle: "Test Subtitle",
    btnType: "outlined",
    link: "/",
  };

  it("renders correctly with given data", () => {
    const { getByText } = render(<PromoHeroGridCard data={mockData} />);

    expect(getByText("Test Promo")).toBeOnTheScreen();
    expect(getByText("This is a test promo card")).toBeOnTheScreen();
    expect(getByText("Click Me")).toBeOnTheScreen();
  });
});
