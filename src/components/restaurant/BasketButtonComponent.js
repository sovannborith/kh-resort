import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { useSelector } from "react-redux";
import {
  selectedBasketItems,
  selectedBasketTotal,
} from "../../features/basketSlice";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Shadow } from "react-native-shadow-2";

const BasketButtonComponent = ({ onPress }) => {
  const basketItems = useSelector(selectedBasketItems);
  const basketTotal = useSelector(selectedBasketTotal);
  return (
    <View
      style={{
        position: "absolute",
        bottom: SIZES.padding,
        width: SIZES.width,
        paddingHorizontal: SIZES.padding,
        height: 80,
      }}
    >
      <Shadow size={[SIZES.width - SIZES.padding * 2, 70]}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: COLORS.primary,
            height: 80,
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.radius,
          }}
          onPress={onPress}
        >
          <View
            style={{
              backgroundColor: COLORS.prePrimary,
              height: 50,
              width: 50,
              borderRadius: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                ...FONTS.h3,
                color: COLORS.primary,
              }}
            >
              {basketItems.length}
            </Text>
          </View>
          <Text
            style={{ fontWeight: "bold", ...FONTS.h3, color: COLORS.white }}
          >
            View Basket Details
          </Text>
          <Text
            style={{ fontWeight: "bold", ...FONTS.h3, color: COLORS.white }}
          >
            {`${basketTotal}$`}
          </Text>
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};

export default BasketButtonComponent;
