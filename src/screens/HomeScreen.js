import { View, Text, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TopPlaceCarousel from "../components/carousel/TopPlaceCarousel";
import HeaderComponent from "../components/HeaderComponent";

import { COLORS, SIZES, FONTS, images } from "../constants/index";
import resorts from "../data/resorts";

const HomeScreen = () => {
  const SCREEN_TOP = useSafeAreaInsets().top;
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

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <TopPlaceCarousel resorts={resorts} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
