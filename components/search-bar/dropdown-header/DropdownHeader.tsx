import React from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "@/styles/theme";
import Text from "@/components/custom-text/Text";

interface DropdownHeaderProps {
  title?: string;
  onClose?: () => void;
  style?: ViewStyle;
}

const DropdownHeader = ({ title = "Popular Search Results", onClose, style }: DropdownHeaderProps) => {
  return (
    <View style={[styles.header, style]}>
      <Text color="dark-primary" style={styles.headerText}>
        {title}
      </Text>
      <Pressable role="button" onPress={onClose}>
        <Ionicons name="close-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: theme.spacing.medium,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    letterSpacing: 2,
  },
});

export default DropdownHeader;
