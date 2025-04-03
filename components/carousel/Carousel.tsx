import React, { useRef, useState, useCallback, ReactElement, JSXElementConstructor } from "react";
import { View, StyleSheet, Dimensions, StyleProp, ViewStyle, TextStyle } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Bullet } from "./bullets/Bullets";
import { ControlButton } from "./controls/Controls";

interface CarouselProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => ReactElement<any, string | JSXElementConstructor<any>>;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  infiniteScroll?: boolean;
  showControls?: boolean;
  showBullets?: boolean;
  bulletStyle?: StyleProp<ViewStyle>;
  activeBulletStyle?: StyleProp<ViewStyle>;
  controlStyle?: StyleProp<ViewStyle>;
  controlIconStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  height?: number;
}

const SwiperCarousel = <T,>({
  data,
  renderItem,
  autoPlay = false,
  autoPlayInterval = 3000,
  infiniteScroll = false,
  showControls = true,
  showBullets = true,
  bulletStyle,
  activeBulletStyle,
  controlStyle,
  controlIconStyle,
  containerStyle,
  height = 100,
}: CarouselProps<T>) => {
  const carouselRef = useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const width = Dimensions.get("window").width;

  const handlePrev = useCallback(() => {
    carouselRef.current?.prev();
  }, []);

  const handleNext = useCallback(() => {
    carouselRef.current?.next();
  }, []);

  const onSnapToItem = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <View style={[styles.container, containerStyle]}>
      <Carousel
        ref={carouselRef}
        loop={infiniteScroll}
        width={width}
        height={height}
        autoPlay={autoPlay}
        autoPlayInterval={autoPlayInterval}
        data={data}
        scrollAnimationDuration={500}
        onSnapToItem={onSnapToItem}
        renderItem={({ item, index }) => renderItem(item, index)}
        // To allow veritical scroll. we eed to set offset to disable vertical guesture and enable horizontal guesture
        onConfigurePanGesture={(panGesture) => panGesture.activeOffsetY([-999999, 999999]).activeOffsetX([-20, 20])}
      />

      {showBullets && (
        <View style={styles.bulletsContainer}>
          {data.map((_, index) => (
            <Bullet key={index} active={index === currentIndex} bulletStyle={bulletStyle} activeBulletStyle={activeBulletStyle} />
          ))}
        </View>
      )}

      {showControls && (
        <>
          <ControlButton
            testID="control-left"
            onPress={handlePrev}
            iconName="arrow-left"
            style={[styles.controlLeft, controlStyle]}
            iconStyle={controlIconStyle}
          />
          <ControlButton
            testID="control-right"
            onPress={handleNext}
            iconName="arrow-right"
            style={[styles.controlRight, controlStyle]}
            iconStyle={controlIconStyle}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  bulletsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 8,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
  activeBullet: {
    backgroundColor: "#000",
  },
  controlButton: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -16 }],
    borderRadius: 20,
    padding: 5,
  },
  controlLeft: {
    left: 10,
  },
  controlRight: {
    right: 10,
  },
  controlIcon: {
    color: "#000",
  },
});

export default SwiperCarousel;
