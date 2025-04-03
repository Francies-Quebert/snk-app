import React from "react";
import { render } from "@testing-library/react-native";
import SearchInput from "./SearchInput";

describe("SearchInput Component", () => {
  it("renders correctly with default props", () => {
    const { getByPlaceholderText } = render(<SearchInput placeholder="Search here" />);
    const input = getByPlaceholderText("Search here");
    expect(input).toBeOnTheScreen();
  });

  it("applies custom containerStyle", () => {
    const customStyle = { backgroundColor: "red" };
    const { getByPlaceholderText } = render(<SearchInput placeholder="Search here" containerStyle={customStyle} />);
    const input = getByPlaceholderText("Search here");
    expect(input.props.style).toContainEqual(customStyle);
  });

  it("passes additional props to the TextInput", () => {
    const { getByPlaceholderText } = render(<SearchInput placeholder="Search here" keyboardType="email-address" />);
    const input = getByPlaceholderText("Search here");
    expect(input.props.keyboardType).toBe("email-address");
  });
});
