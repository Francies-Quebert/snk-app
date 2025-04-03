import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import DropdownItem from "./DropdownItem";

describe("DropdownItem", () => {
  const mockItem = { id: "1", name: "Test Item" };
  const mockOnPress = jest.fn();

  it("renders the item name correctly", () => {
    const { getByText } = render(<DropdownItem item={mockItem} onPress={mockOnPress} />);

    expect(getByText("Test Item")).toBeOnTheScreen();
  });

  it("calls onPress when pressed", () => {
    const { getByText } = render(<DropdownItem item={mockItem} onPress={mockOnPress} />);

    fireEvent.press(getByText("Test Item"));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("applies custom styles when provided", () => {
    const customStyle = { backgroundColor: "red" };
    const { getByTestId } = render(<DropdownItem item={mockItem} onPress={mockOnPress} style={customStyle} />);

    const touchable = getByTestId("dropdown-item");
    expect(touchable.props.style).toContainEqual(customStyle);
  });
});
