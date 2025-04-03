import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import Text from "@/components/custom-text/Text";

interface SearchButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
  label?: string;
}

const SearchButton = ({ onPress, style, label = "SEARCH" }: SearchButtonProps) => {
  return (
    <Pressable testID="search-button" style={[styles.button, style]} onPress={onPress}>
      <Text color="white">{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});

export default SearchButton;
