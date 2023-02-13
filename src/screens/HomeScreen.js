import { View, Text, Image } from "react-native";

import { COLORS, SIZES, FONTS, images } from "../constants/index";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Image
        source={images.angkor_wat}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 250,
          borderBottomRightRadius: SIZES.radius * 6,
        }}
      />
    </View>
  );
};

export default HomeScreen;
