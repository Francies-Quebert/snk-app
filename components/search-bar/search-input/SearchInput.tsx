import React from "react";
import { TextInput, TextInputProps, StyleSheet, TextStyle } from "react-native";
import { theme } from "@/styles/theme";

interface SearchInputProps extends TextInputProps {
  containerStyle?: TextStyle;
}

const SearchInput = ({ containerStyle, ...props }: SearchInputProps) => {
  return <TextInput keyboardType="web-search" style={[styles.input, containerStyle]} placeholderTextColor={theme.colors["dark-secondary"]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#00000020",
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    flex: 1,
  },
});

export default SearchInput;
