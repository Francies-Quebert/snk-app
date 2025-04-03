import DrawerContent from "@/components/drawer-content/DrawerContent";
import Header from "@/components/header/Header";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import Drawer from "expo-router/drawer";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    FuturaSerieBQ: require("../assets/fonts/FNRegular.ttf"),
    FuturaSerieBQThin: require("../assets/fonts/FNThin.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer screenOptions={{ header: Header }} drawerContent={DrawerContent}>
          <Drawer.Screen
            name="index"
            options={{
              sceneStyle: { backgroundColor: "#FFF" },
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
