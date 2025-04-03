import React from "react";
import { Text as RNText, TextProps as RNTextProps, StyleSheet, TextStyle } from "react-native";
import * as Font from "expo-font";
type FontWeight = "thin" | "regular" | "medium" | "bold";
type FontColor = "white" | "primary" | "black" | "dark-primary" | "dark-secondary";
type FontSize = "xxs" | "xs" | "sm" | "lg" | "xl" | "rg" | "xxl";

interface CustomTextProps extends RNTextProps {
  weight?: FontWeight;
  color?: FontColor;
  size?: FontSize;
}
const getStyles = (weight: FontWeight, color: FontColor, size: FontSize): TextStyle => {
  const weightMap = {
    thin: "100",
    regular: "400",
    medium: "500",
    bold: "700",
  } as const;

  const fontWeightMap = {
    thin: "FuturaSerieBQThin",
    medium: "FuturaforSNK",
    regular: "FuturaforSNK",
    bold: "FuturaforSNK",
  } as const;

  const colorMap = {
    white: "#FFFFFF",
    primary: "#CA9396",
    black: "#000000",
    "dark-primary": "#1E1E1E",
    "dark-secondary": "#444444",
  } as const;

  const sizeMap = {
    xxs: 8,
    xs: 12,
    sm: 14,
    rg: 16,
    lg: 18,
    xl: 24,
    xxl: 35,
  } as const;

  return {
    fontWeight: weightMap[weight],
    color: colorMap[color],
    fontSize: sizeMap[size],
    fontFamily: fontWeightMap[weight],
  };
};

const Text: React.FC<CustomTextProps> = ({ weight = "regular", color = "black", size = "rg", style, ...props }) => {
  const textStyle = getStyles(weight, color, size);

  return <RNText style={[textStyle, style]} {...props} />;
};

export default Text;
