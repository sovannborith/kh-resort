import { useCallback } from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TopPlaceCarousel from "../components/carousel/TopPlaceCarousel";
import HeaderComponent from "../components/HeaderComponent";

import { COLORS, SIZES, FONTS, images } from "../constants/index";
import resorts from "../data/resorts";

const HomeScreen = () => {
  const SCREEN_TOP = useSafeAreaInsets().top + 40;
  const resortKeyExtractor = useCallback(
    (item) => `resort-${item.id.toString()}`,
    []
  );

  resorts.map((resort) => console.log(resort));
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.gray05 }}>
      <Image
        source={images.angkor_wat}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 200,
          borderBottomRightRadius: SIZES.radius * 6,
          opacity: 0.5,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: SCREEN_TOP,
          left: 0,
          paddingLeft: SIZES.padding,
        }}
      >
        <Text
          style={{
            color: COLORS.primary,
            fontWeight: "900",
            ...FONTS.h1,
          }}
        >
          Find Your
        </Text>
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Dream Resort</Text>
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>in Cambodia</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlaceCarousel data={resorts} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
