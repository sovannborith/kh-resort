import { View, Text, Image } from "react-native";

import { COLORS, SIZES, FONTS, images } from "../constants/index";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.gray05 }}>
      <Image
        source={images.angkor_wat}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 250,
          borderBottomRightRadius: SIZES.radius * 6,
        }}
      />
      <Text style={{ ...FONTS.body1 }}>Hello Historical Resort</Text>
    </View>
  );
};

export default HomeScreen;
