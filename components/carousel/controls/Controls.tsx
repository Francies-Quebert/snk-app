import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Pressable, StyleProp, TextStyle, ViewStyle } from "react-native";
import { styles } from "../styles";
import { theme } from "@/styles/theme";

interface ControlButtonProps {
  onPress: () => void;
  iconName: string;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
  testID?: string;
}

export const ControlButton = ({ onPress, iconName, style, iconStyle, testID }: ControlButtonProps) => {
  return (
    <Pressable style={[styles.controlButton, style]} onPress={onPress} {...(testID && { testID })}>
      <SimpleLineIcons name={iconName as any} size={32} style={[styles.controlIcon, iconStyle]} color={theme.colors["dark-primary"]} />
    </Pressable>
  );
};
