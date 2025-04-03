import React from "react";
import { View, FlatList } from "react-native";
import { componentMap } from "./componentMap";
import type { HomepageSection } from "./types";
import SwiperCarousel from "../carousel/Carousel";

const HomepageRenderer = ({ sections }: { sections: HomepageSection[] }) => {
  const visibleSections = sections.filter((section) => section.config?.visible !== false).sort((a, b) => (a.config?.priority || 0) - (b.config?.priority || 0));

  const renderSection = ({ item }: { item: HomepageSection }) => {
    const Component = componentMap[item.component];
    if (!Component) return null;

    if (item.type === "carousel") {
      return (
        <SwiperCarousel
          height={item.config?.height}
          data={item.data as any}
          renderItem={(item) => <Component data={item} />}
          autoPlay={item.config?.autoplay}
          autoPlayInterval={10000}
          infiniteScroll={true}
          showControls={item.config?.showControls}
          showBullets={item.config?.showIndicators}
        />
      );
    } else if (item.type === "standalone") {
      return (
        <View>
          <Component data={item.data} config={item.config} />
        </View>
      );
    }
    return (
      <View>
        {item.data.map((componentData) => (
          <Component key={componentData.id} data={componentData} />
        ))}
      </View>
    );
  };

  return <FlatList data={visibleSections} renderItem={renderSection} keyExtractor={(item) => item.id} scrollEventThrottle={16} />;
};

export default HomepageRenderer;
