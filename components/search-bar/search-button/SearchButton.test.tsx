import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SearchButton from "./SearchButton";

describe("SearchButton", () => {
  it("renders correctly with default label", () => {
    const { getByText } = render(<SearchButton />);
    expect(getByText("SEARCH")).toBeOnTheScreen();
  });

  it("renders correctly with custom label", () => {
    const { getByText } = render(<SearchButton label="FIND" />);
    expect(getByText("FIND")).toBeOnTheScreen();
  });

  it("calls onPress when pressed", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<SearchButton onPress={mockOnPress} />);
    const button = getByText("SEARCH");
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("applies custom styles", () => {
    const customStyle = { backgroundColor: "red" };
    const { getByTestId } = render(<SearchButton style={customStyle} />);
    const button = getByTestId("search-button");
    expect(button.props.style).toContainEqual(customStyle);
  });
});
