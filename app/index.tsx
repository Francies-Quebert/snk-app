import HomepageRenderer from "@/components/home-render/HomepageRenderer";
import { homepageData } from "@/mock-data/home-screen-data";
import { View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <HomepageRenderer sections={homepageData} />
    </View>
  );
};
export default HomeScreen;
