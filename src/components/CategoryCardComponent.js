import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { urlFor } from "../data/sanity";

const CategoryCardComponent = ({
  category,
  onPress,
  containerStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          position: "relative",
          alignItems: "center",
          borderRadius: SIZES.radius,
          shadowColor: COLORS.gray50,
          shadowOffset: { width: 3, height: 3 },
          shadowOpacity: 0.5,
          elevation: 3,
          ...containerStyle,
        }}
      >
        <Image
          source={{ uri: urlFor(category.category_image).url() }}
          style={{
            height: 80,
            width: 80,
            resizeMode: "cover",
            borderRadius: SIZES.radius,
          }}
        />
        <Text
          style={{
            position: "absolute",
            left: SIZES.radius / 2,
            bottom: SIZES.radius / 2,
            fontWeight: "600",
            ...FONTS.h3,
            ...textStyle,
          }}
        >
          {category.category_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default CategoryCardComponent;
