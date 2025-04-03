import React from "react";
import { render } from "@testing-library/react-native";
import Text from "./Text";

describe("Text Component", () => {
  it("renders with default props", () => {
    const { getByText } = render(<Text>Default Text</Text>);
    const textElement = getByText("Default Text");

    expect(textElement.props.style[0].fontWeight).toBe("400"); // Default weight: regular
    expect(textElement.props.style[0].color).toBe("#000000"); // Default color: black
    expect(textElement.props.style[0].fontSize).toBe(16); // Default size: rg
  });

  it("applies the correct font weight", () => {
    const { getByText } = render(<Text weight="thin">Thin Text</Text>);
    const textElement = getByText("Thin Text");

    expect(textElement.props.style[0].fontWeight).toBe("100"); // Weight: thin
    expect(textElement.props.style[0].fontFamily).toBe("FuturaSerieBQThin");
  });

  it("applies the correct font color", () => {
    const { getByText } = render(<Text color="primary">Primary Text</Text>);
    const textElement = getByText("Primary Text");

    expect(textElement.props.style[0].color).toBe("#CA9396"); // Color: primary
  });

  it("applies the correct font size", () => {
    const { getByText } = render(<Text size="xl">XL Text</Text>);
    const textElement = getByText("XL Text");

    expect(textElement.props.style[0].fontSize).toBe(24); // Size: xl
  });
});
