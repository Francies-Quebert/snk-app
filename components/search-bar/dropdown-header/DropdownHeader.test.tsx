import React from "react";
import { render } from "@testing-library/react-native";
import { fireEvent } from "@testing-library/react-native";
import DropdownHeader from "./DropdownHeader";

describe("DropdownHeader", () => {
  it("renders the title correctly", () => {
    const { getByText } = render(<DropdownHeader title="Test Title" />);
    expect(getByText("Test Title")).toBeTruthy();
  });

  it("uses the default title when no title is provided", () => {
    const { getByText } = render(<DropdownHeader />);
    expect(getByText("Popular Search Results")).toBeTruthy();
  });

  it("calls the onClose function when the close button is pressed", () => {
    const onCloseMock = jest.fn();
    const { getByRole } = render(<DropdownHeader onClose={onCloseMock} />);
    const closeButton = getByRole("button");
    fireEvent.press(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
