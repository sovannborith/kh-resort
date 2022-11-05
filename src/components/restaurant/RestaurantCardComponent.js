import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { SharedElement } from "react-navigation-shared-element";

import { COLORS, SIZES, icons, FONTS } from "../../constants";
import { urlFor } from "../../data/sanity";

const RestaurantCardComponent = ({
  item,
  containerStyle,
  onPress,
  sharedElementPrefix,
}) => {
  return (
    <View
      style={{
        height: 260,
        width: 250,
        shadowColor: COLORS.gray50,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        elevation: 3,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}
    >
      <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
        <SharedElement
          id={`${sharedElementPrefix}-restaurant-image-${item._id}`}
        >
          <Image
            source={{ uri: urlFor(item.restaurant_image).url() }}
            style={{
              height: "90%",
              width: "100%",
              borderRadius: 15,
            }}
          />
        </SharedElement>
        <View
          style={{
            position: "absolute",
            paddingHorizontal: SIZES.radius,
            bottom: 0,
            left: 0,
            width: "100%",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            paddingBottom: SIZES.radius,
          }}
        >
          <View style={{ paddingTop: SIZES.radius }}>
            <Text
              style={{
                fontWeight: "800",
                ...FONTS.h3,
              }}
            >
              {item.restaurant_name}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.radius,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={icons.star}
                style={{ width: 20, height: 20, tintColor: COLORS.primary }}
              />
              <Image
                source={icons.star}
                style={{ width: 20, height: 20, tintColor: COLORS.primary }}
              />
              <Image
                source={icons.star}
                style={{ width: 20, height: 20, tintColor: COLORS.primary }}
              />
              <Image
                source={icons.star}
                style={{ width: 20, height: 20, tintColor: COLORS.primary }}
              />
              <Image
                source={icons.star}
                style={{ width: 20, height: 20, tintColor: COLORS.gray20 }}
              />
            </View>
            <View>
              <Text
                style={{
                  color: COLORS.gray30,
                  fontWeight: "500",
                  ...FONTS.body5,
                }}
              >
                {item.number_of_view} views
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default RestaurantCardComponent;
