import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button, ButtonVariant } from "./Button"; // adjust the import path as needed
import { theme } from "@/styles/theme";
import { Link } from "expo-router";

jest.mock("expo-router", () => ({
  Link: jest.fn(({ children }) => children),
  Href: jest.requireActual("expo-router").Href,
}));

describe("Button Component", () => {
  const mockTitle = "Test Button";
  const mockHref = "/";

  it("renders correctly with default props", () => {
    const { getByText } = render(<Button title={mockTitle} href={mockHref} />);

    expect(getByText(mockTitle)).toBeOnTheScreen();
    expect(Link).toHaveBeenCalledWith(expect.objectContaining({ href: mockHref }), expect.anything());
  });

  it.each([
    ["solid", theme.colors["dark-primary"], "#ffffff"],
    ["outlined", undefined, theme.colors["dark-primary"]],
    ["link", undefined, theme.colors["dark-primary"]],
  ] as [ButtonVariant, string | undefined, string][])("applies correct styles for %s variant", (variant, expectedBackgroundColor, expectedTextColor) => {
    const { getByText, getByTestId } = render(<Button title={mockTitle} href={mockHref} variant={variant} />);

    const button = getByTestId("button-container");
    const text = getByText(mockTitle);

    if (expectedBackgroundColor) {
      expect(button).toHaveStyle({ backgroundColor: expectedBackgroundColor });
    }

    if (variant === "outlined") {
      expect(button).toHaveStyle({
        borderWidth: 1,
        borderColor: theme.colors["dark-primary"],
      });
    }

    expect(text).toHaveStyle({ color: expectedTextColor });

    if (variant === "link") {
      expect(text).toHaveStyle({ textDecorationLine: "underline" });
    }
  });

  it("merges custom styles correctly", () => {
    const customStyle = { marginTop: 20 };

    const { getByTestId } = render(<Button title={mockTitle} href={mockHref} style={customStyle} />);

    const button = getByTestId("button-container");

    // Check that base styles are still applied
    expect(button).toHaveStyle({
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 32,
    });

    // Check that custom style is merged correctly
    expect(button).toHaveStyle(customStyle);
  });

  it("passes the correct href to Link component", () => {
    render(<Button title={mockTitle} href={mockHref} />);

    expect(Link).toHaveBeenCalledWith(expect.objectContaining({ href: mockHref }), expect.anything());
  });
});
