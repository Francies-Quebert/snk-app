import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle, Pressable } from "react-native";
import { theme } from "@/styles/theme";
import Text from "@/components/custom-text/Text";

interface DropdownItemProps {
  item: { id: string; name: string };
  onPress: () => void;
  style?: ViewStyle;
}

const DropdownItem = ({ item, onPress, style }: DropdownItemProps) => {
  return (
    <Pressable testID="dropdown-item" style={[styles.item, style]} onPress={onPress}>
      <Text weight="thin" color="dark-secondary">
        {item.name}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: theme.spacing.medium,
  },
});

export default DropdownItem;
