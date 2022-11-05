import { View, Text, TouchableOpacity, Image, Share } from "react-native";
import React from "react";
import { SharedElement } from "react-navigation-shared-element";

import { COLORS, SIZES, icons, FONTS } from "../../constants";
import { urlFor } from "../../data/sanity";

const FoodRowCardComponent = ({
  food,
  containerStyle,
  imageStyle,
  onPress,
  sharedElementPrefix,
}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: COLORS.gray05,
        padding: SIZES.radius,
        borderRadius: SIZES.radius,
        shadowColor: COLORS.gray50,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{ flexDirection: "row" }}
      >
        <View style={{ alignItems: "center" }}>
          <SharedElement id={`${sharedElementPrefix}-food-image-${food._id}`}>
            <Image
              source={{ uri: urlFor(food.dish_image).url() }}
              resizeMode="cover"
              style={{
                resizeMode: "cover",
                borderRadius: SIZES.radius,
                ...imageStyle,
              }}
            />
          </SharedElement>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "bold",
              ...FONTS.h4,
            }}
          >
            {food.dish_price} {"$"}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            height: "100%",
            marginLeft: SIZES.radius,
          }}
        >
          <Text style={{ fontWeight: "bold", ...FONTS.h4 }}>
            {food.dish_name}
          </Text>
          <Text style={{ color: COLORS.gray30, ...FONTS.body5 }}>
            {food.short_description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FoodRowCardComponent;
