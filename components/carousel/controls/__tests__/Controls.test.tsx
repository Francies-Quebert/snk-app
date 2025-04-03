import React from "react";
import { render } from "@testing-library/react-native";
import { ControlButton } from "../Controls";

// Mock the SimpleLineIcons component
jest.mock("@expo/vector-icons/SimpleLineIcons", () => "SimpleLineIcons");

describe("ControlButton", () => {
  it("renders correctly", () => {
    const mockOnPress = jest.fn();
    const { toJSON } = render(<ControlButton onPress={mockOnPress} iconName="arrow-right" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders with custom styles", () => {
    const mockOnPress = jest.fn();
    const { toJSON } = render(<ControlButton onPress={mockOnPress} iconName="arrow-left" style={{ backgroundColor: "red" }} iconStyle={{ color: "blue" }} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
