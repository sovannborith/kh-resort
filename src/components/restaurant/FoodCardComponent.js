import { View, Text, TouchableOpacity, Image, Share } from "react-native";
import React from "react";
import { SharedElement } from "react-navigation-shared-element";

import { COLORS, SIZES, icons, FONTS } from "../../constants";

const FoodCardComponent = ({
  food,
  containerStyle,
  imageStyle,
  barStyle,
  onPress,
  prefix,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <SharedElement id={`${prefix}-food-image-${food.id}`}>
        <Image
          source={food.food_image}
          resizeMode="cover"
          style={{
            resizeMode: "cover",
            ...imageStyle,
          }}
        />
      </SharedElement>
      <View
        style={{
          position: "absolute",
          bottom: -SIZES.padding,
          left: 0,
          height: 40,
          backgroundColor: COLORS.white,
          width: "100%",
          opacity: 0.7,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          ...barStyle,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            ...FONTS.h3,
          }}
        >
          {food.food_name}
        </Text>
        <Text>20 $</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCardComponent;
