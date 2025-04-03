import { DrawerHeaderProps } from "@react-navigation/drawer";
import { Pressable, StyleSheet, View } from "react-native";
import TextBanner from "../text-banner/TextBanner";
import { DrawerActions } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "@/styles/theme";
import { Image } from "expo-image";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import SearchBarWithDropdown from "../search-bar/SearchBar";
import Text from "../custom-text/Text";

const Header = ({ navigation }: DrawerHeaderProps) => {
  const onMenuPress = () => navigation.dispatch(DrawerActions.toggleDrawer);
  return (
    <View>
      <TextBanner text={"Enjoy 15% Off Your First Order Using Code"} codeText={"FIRST15"} linkText={"SHOP NOW"} />
      <AppHeader onMenuPress={onMenuPress} />
    </View>
  );
};

const AppHeader = ({ onMenuPress }: { onMenuPress: () => void }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.itemsContainer, { justifyContent: "flex-start" }]}>
          <Pressable testID="menu-button" onPress={onMenuPress}>
            <Ionicons name="menu" size={34} color="black" />
          </Pressable>
        </View>
        <View style={[styles.logoContainer]}>
          <Image testID="logo-image" source={require("@/assets/images/snk-log.svg")} style={styles.snkLogo} contentFit="contain" />
        </View>
        <View style={[styles.itemsContainer, { justifyContent: "flex-end", gap: theme.spacing.medium }]}>
          <View testID="user-icon" style={styles.iconContainer}>
            <FontAwesome6 name="user" size={24} color="black" />
            <View style={styles.profileNotification} />
          </View>
          <View testID="shopping-bag-icon" style={styles.iconContainer}>
            <FontAwesome6 name="bag-shopping" size={24} color="black" />
            <View style={styles.cartNotification}>
              <Text color="white" size="xxs">
                0
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <SearchBarWithDropdown />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    height: 66,
  },
  logoContainer: {
    height: 35,
    width: 130,
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
  cartNotification: {
    position: "absolute",
    top: 2,
    right: -5,
    height: 12,
    width: 12,
    backgroundColor: "green",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  itemsContainer: {
    padding: theme.spacing.medium,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  snkLogo: {
    flex: 1,
  },
});
