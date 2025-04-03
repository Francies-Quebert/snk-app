import { Dimensions, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Text from "../custom-text/Text";
import { TakeoverCardData } from "../home-render/types";
import { Image } from "expo-image";
import { theme } from "@/styles/theme";
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import Switch from "./Switch";

type TakeoverCardProps = {
  data: TakeoverCardData;
};

const { width } = Dimensions.get("window");

const TakeoverCard = ({ data }: TakeoverCardProps) => {
  const [isOn, setIsOn] = useState(false);

  // -width to start the transition from left
  const translateX = useSharedValue(-width);

  React.useEffect(() => {
    translateX.value = withRepeat(withTiming(width, { duration: 4000, easing: Easing.linear }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  const { image, title } = data;
  return (
    <View style={styles.cardContainer}>
      <Animated.View style={[styles.gradientContainer, animatedStyle]}>
        <LinearGradient colors={["transparent", "#FFFFFF4D", "transparent"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradient} />
      </Animated.View>
      <Image source={image} style={styles.image} contentFit="contain" />
      <Text color="primary" size="xl" style={styles.textMargin}>
        {title}
      </Text>
      <View style={styles.switchWrapper}>
        <Switch isOn={isOn} handleSwitch={toggleSwitch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    position: "absolute",
  },
  gradientContainer: {
    position: "absolute",
    width: width * 2,
    height: "100%",
  },
  gradient: {
    width: "100%",
    height: "100%",
  },
  cardContainer: {
    backgroundColor: "black",
    height: 72,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  image: {
    width: 120,
    height: 24,
  },
  textMargin: {
    marginLeft: theme.spacing.medium,
  },
  switchWrapper: {
    marginLeft: theme.spacing.large,
  },
});
export default TakeoverCard;
