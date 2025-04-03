import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Header from "./Header";
import { DrawerActions } from "@react-navigation/native";

jest.mock("expo-router", () => ({
  ...jest.requireActual("@react-navigation/native"),
  DrawerActions: {
    toggleDrawer: jest.fn(),
  },
}));

jest.mock("@/assets/images/snk-log.svg", () => "mocked-image");

describe("Header Component", () => {
  const mockNavigation = {
    dispatch: jest.fn(),
  };

  it("should render the TextBanner component with correct props", () => {
    // @ts-ignore
    const { getByText } = render(<Header navigation={mockNavigation} />);
    expect(getByText("Enjoy 15% Off Your First Order Using Code FIRST15 - SHOP NOW")).toBeOnTheScreen();
  });

  it("should call navigation.dispatch with DrawerActions.toggleDrawer when menu icon is pressed", () => {
    // @ts-ignore
    const { getByTestId } = render(<Header navigation={mockNavigation} />);
    const menuButton = getByTestId("menu-button");
    fireEvent.press(menuButton);
    expect(mockNavigation.dispatch).toHaveBeenCalledWith(DrawerActions.toggleDrawer);
  });

  it("should render the logo image", () => {
    // @ts-ignore
    const { getByTestId } = render(<Header navigation={mockNavigation} />);
    const logoImage = getByTestId("logo-image");
    expect(logoImage).toBeOnTheScreen();
  });

  it("should render the user and shopping bag icons", () => {
    // @ts-ignore
    const { getByTestId } = render(<Header navigation={mockNavigation} />);
    const userIcon = getByTestId("user-icon");
    const shoppingBagIcon = getByTestId("shopping-bag-icon");
    expect(userIcon).toBeOnTheScreen();
    expect(shoppingBagIcon).toBeOnTheScreen();
  });

  it("should render the SearchBarWithDropdown component", () => {
    // @ts-ignore
    const { getByTestId } = render(<Header navigation={mockNavigation} />);
    const searchBar = getByTestId("search-bar");
    expect(searchBar).toBeOnTheScreen();
  });
});
