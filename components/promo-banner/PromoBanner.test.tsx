import React from "react";
import PromoBanner from "./PromoBanner";
import { render } from "@testing-library/react-native";

const promoData = {
  id: "1",
  image: "https://example.com/image.png",
  title: "Test Title",
  subtitle: "Test Subtitle",
  link: "/" as const,
  code: "TESTCODE",
};

describe("PromoBanner", () => {
  it("displays the correct texts", () => {
    const { getByText } = render(<PromoBanner data={promoData} />);
    expect(getByText("Test Title")).toBeOnTheScreen();
    expect(getByText("Test Subtitle")).toBeOnTheScreen();
    expect(getByText(/Use Code:/)).toBeOnTheScreen();
    expect(getByText("TESTCODE")).toBeOnTheScreen();
  });
});
