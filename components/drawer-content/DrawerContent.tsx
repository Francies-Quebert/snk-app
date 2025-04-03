import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "@/styles/theme";
import List from "./List";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const toggleDrawer = () => {
    navigation.closeDrawer();
  };
  return (
    <View>
      <Header toggleDrawer={toggleDrawer} />
      <List />
    </View>
  );
};

type HeaderProps = {
  toggleDrawer: () => void;
};

const Header = ({ toggleDrawer }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Pressable testID="profile" style={styles.iconContainer}>
        <Ionicons name="person-outline" size={34} color="white" />
        <View style={styles.profileNotification} />
      </Pressable>
      <Pressable testID="close" onPress={toggleDrawer}>
        <Ionicons name="close-outline" size={34} color="white" />
      </Pressable>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    paddingHorizontal: theme.spacing.large,
    flexDirection: "row",
  },
  iconContainer: {
    position: "relative",
  },
  profileNotification: {
    position: "absolute",
    bottom: -2,
    right: -2,
    height: 12,
    width: 12,
    backgroundColor: theme.colors.pink,
    borderRadius: 8,
  },
});
