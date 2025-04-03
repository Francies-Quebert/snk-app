import React, { useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated";
import Text from "../custom-text/Text";
import { theme } from "@/styles/theme";

type SwitchProps = {
  isOn: boolean;
  handleSwitch: (isOn: boolean) => void;
};
const Switch = ({ isOn = false, handleSwitch }: SwitchProps) => {
  const translateX = useSharedValue(isOn ? 35 : 0);

  const toggleSwitch = () => {
    // setIsOn((prev) => !prev);
    translateX.value = isOn ? 0 : 35;
    handleSwitch(isOn);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(translateX.value) }],
    };
  });

  return (
    <Pressable onPress={toggleSwitch} style={styles.container}>
      <View style={[styles.track, { justifyContent: isOn ? "flex-start" : "flex-end" }]}>
        <Text size="xxs" color="white">
          {isOn ? "ON" : "OFF"}
        </Text>
        <Animated.View style={[styles.thumb, animatedStyle]} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  track: {
    width: 65,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme.colors["dark-primary"],
    backgroundColor: theme.colors["dark-primary"],
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    position: "absolute",
    left: 0,
  },
});

export default Switch;
