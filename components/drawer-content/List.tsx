// We can use Drawer Item to render list of routes based on expo file routing using mock data for now
import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../custom-text/Text";
import { Link } from "expo-router";

const routesList = ["Offers", "Brands", "New", "Skincare", "Makeup", "Bath & Body", "Travel Minis", "Sun & Tan", "Gifts"];

const List = () => {
  return (
    <View>
      {routesList.map((item) => (
        <Link key={item} href={"/"}>
          <View style={styles.listContainer}>
            <Text key={item} weight="thin" size="lg" style={styles.text}>
              {item}
            </Text>
          </View>
        </Link>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#dee2e6",
    width: "100%",
  },
  text: {
    textTransform: "uppercase",
  },
});
