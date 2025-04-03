import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { styles } from "../styles";
import { StyleProp, ViewStyle } from "react-native";

interface BulletProps {
  active: boolean;
  bulletStyle?: StyleProp<ViewStyle>;
  activeBulletStyle?: StyleProp<ViewStyle>;
}

export const Bullet = ({ active, bulletStyle, activeBulletStyle }: BulletProps) => {
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(active ? 1 : 0.5, { duration: 200 }),
    transform: [{ scale: withTiming(active ? 1.2 : 1, { duration: 200 }) }],
  }));

  const baseStyles = [styles.bullet, bulletStyle, animatedStyle];
  const activeStyles = active ? [styles.activeBullet, activeBulletStyle] : [];
  const combinedStyles = [...baseStyles, ...activeStyles];

  return <Animated.View testID="bullet" style={combinedStyles} />;
};
