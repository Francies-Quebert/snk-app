import React from "react";
import { render } from "@testing-library/react-native";
import ProductCard from "./ProductCard";
import { ProductData } from "@/components/home-render/types";

describe("ProductCard", () => {
  const mockData: ProductData = {
    image: "https://example.com/image.jpg",
    link: "/",
    quickBuy: true,
    name: "Test Product",
    brand: "Test Brand",
    priceRange: "$10 - $20",
    id: "1",
    rating: 4.5,
    reviews: 100,
  };

  it("renders the product name", () => {
    const { getByText } = render(<ProductCard data={mockData} />);
    expect(getByText("Test Product")).toBeOnTheScreen();
  });

  it("renders the product brand", () => {
    const { getByText } = render(<ProductCard data={mockData} />);
    expect(getByText("Test Brand")).toBeOnTheScreen();
  });

  it("renders the product price range", () => {
    const { getByText } = render(<ProductCard data={mockData} />);
    expect(getByText("$10 - $20")).toBeOnTheScreen();
  });

  it("renders the quick buy button if quickBuy is true", () => {
    const { getByText } = render(<ProductCard data={mockData} />);
    expect(getByText("QUICK BUY")).toBeOnTheScreen();
  });

  it("does not render the quick buy button if quickBuy is false", () => {
    const { queryByText } = render(<ProductCard data={{ ...mockData, quickBuy: false }} />);
    expect(queryByText("QUICK BUY")).toBeNull();
  });
});
