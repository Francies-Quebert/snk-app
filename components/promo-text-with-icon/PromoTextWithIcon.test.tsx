import React from "react";
import { render } from "@testing-library/react-native";
import PromoTextWithIcon, { PromoTextWithIconProps } from "./PromoTextWithIcon";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

jest.mock("@expo/vector-icons", () => ({
  Feather: jest.fn(() => null),
  MaterialCommunityIcons: jest.fn(() => null),
}));

jest.mock("expo-router", () => ({
  Link: jest.fn(({ children }) => children),
}));

describe("PromoTextWithIcon", () => {
  const mockData: PromoTextWithIconProps["data"] = {
    icon: { type: "feather", name: "home" },
    title: "Promo Title",
    subtitle: "Promo Subtitle",
    id: "1",
  };

  it("renders the component with the correct title and subtitle", () => {
    const { getByText } = render(<PromoTextWithIcon data={mockData} />);

    expect(getByText("Promo Title")).toBeOnTheScreen();
    expect(getByText("Promo Subtitle")).toBeOnTheScreen();
  });

  it("renders the correct icon based on the icon type", () => {
    render(<PromoTextWithIcon data={mockData} />);

    expect(Feather).toHaveBeenCalledWith(expect.objectContaining({ name: "home", size: 24 }), {});
  });

  it("wraps the component in a Link component", () => {
    const { getByText } = render(<PromoTextWithIcon data={mockData} />);

    expect(Link).toHaveBeenCalled();
    expect(getByText("Promo Title")).toBeOnTheScreen();
  });
});
