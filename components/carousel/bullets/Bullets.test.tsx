jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  return Reanimated;
});

import React from "react";
import { render } from "@testing-library/react-native";
import { Bullet } from "./Bullets";

describe("Bullet Component", () => {
  it("renders with active styles when active", () => {
    const { getByTestId } = render(<Bullet active={true} />);
    const bullet = getByTestId("bullet");

    expect(bullet.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ opacity: 1 }), expect.objectContaining({ transform: [{ scale: 1.2 }] })])
    );
  });

  it("applies custom bulletStyle", () => {
    const customStyle = { backgroundColor: "red" };
    const { getByTestId } = render(<Bullet active={false} bulletStyle={customStyle} />);
    const bullet = getByTestId("bullet");

    expect(bullet.props.style).toEqual(expect.arrayContaining([customStyle]));
  });

  it("applies custom activeBulletStyle when active", () => {
    const customActiveStyle = { backgroundColor: "blue" };
    const { getByTestId } = render(<Bullet active={true} activeBulletStyle={customActiveStyle} />);
    const bullet = getByTestId("bullet");

    expect(bullet.props.style).toEqual(expect.arrayContaining([customActiveStyle]));
  });
});
