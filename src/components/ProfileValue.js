import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { SIZES, FONTS, COLORS, icons } from "../constants";

const ProfileValue = ({ icon, label, value, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        height: 80,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.primary,
          }}
        />
      </View>
      {/* Label & value */}
      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        {label && (
          <Text style={{ color: COLORS.gray20, ...FONTS.body4 }}>{label}</Text>
        )}
        <Text style={{ ...FONTS.h3 }}>{value}</Text>
      </View>
      <Image
        source={icons.right_arrow}
        style={{ width: 25, height: 25, tintColor: COLORS.primary }}
      />
    </TouchableOpacity>
  );
};

export default ProfileValue;
