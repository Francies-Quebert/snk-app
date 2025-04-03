import React from "react";
import { render } from "@testing-library/react-native";
import TextBanner from "./TextBanner";

describe("TextBanner Component", () => {
  it("renders the text, codeText, and linkText correctly", () => {
    const props = {
      text: "Sample text",
      codeText: "Code example",
      linkText: "Click here",
    };

    const { getByText } = render(<TextBanner {...props} />);

    expect(getByText(`${props.text} ${props.codeText} - ${props.linkText}`)).toBeOnTheScreen();
  });

  it("matches the snapshot", () => {
    const props = {
      text: "Snapshot text",
      codeText: "Snapshot code",
      linkText: "Snapshot link",
    };

    const { toJSON } = render(<TextBanner {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
