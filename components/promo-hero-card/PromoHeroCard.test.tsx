import React from "react";
import { render } from "@testing-library/react-native";
import PromoHeroCard from "./PromoHeroCard";
import { PromoHeroCardData } from "../home-render/types";

describe("PromoHeroCard", () => {
  const mockData: PromoHeroCardData = {
    image: "https://example.com/image.jpg",
    description: "This is a test description",
    subtitle: "Test Subtitle",
    title: "Test Title",
    btnText: "SHOP NOW",
    btnType: "solid",
    link: "/",
    id: "1",
  };

  it("renders the title correctly", () => {
    const { getByText } = render(<PromoHeroCard data={mockData} />);
    expect(getByText("Test Title")).toBeOnTheScreen();
  });

  it("renders the subtitle correctly", () => {
    const { getByText } = render(<PromoHeroCard data={mockData} />);
    expect(getByText("Test Subtitle")).toBeOnTheScreen();
  });

  it("renders the description correctly", () => {
    const { getByText } = render(<PromoHeroCard data={mockData} />);
    expect(getByText("This is a test description")).toBeOnTheScreen();
  });

  it("renders the button with correct text", () => {
    const { getByText } = render(<PromoHeroCard data={mockData} />);
    expect(getByText("SHOP NOW")).toBeOnTheScreen();
  });
});
