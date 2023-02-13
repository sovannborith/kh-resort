import React, { useEffect, useRef } from "react";
import { Image, TouchableOpacity, View, Text, Animated } from "react-native";
import { SIZES, FONTS, COLORS, icons } from "../constants";

const ProfileRadioButton = ({ icon, label, isSelected, onPress }) => {
  const radioAnimated = useRef(new Animated.Value(0)).current;

  const circleColorAnimated = radioAnimated.interpolate({
    inputRange: [0, 17],
    outputRange: [COLORS.gray40, COLORS.primary],
  });

  const lineColorAnimated = radioAnimated.interpolate({
    inputRange: [0, 17],
    outputRange: [COLORS.gray40, COLORS.primary],
  });

  useEffect(() => {
    if (isSelected) {
      Animated.timing(radioAnimated, {
        toValue: 17,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(radioAnimated, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  });
  return (
    <View
      style={{
        flexDirection: "row",
        height: 80,
        alignItems: "center",
      }}
    >
      {/* Icon */}
      <View
        style={{
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
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
        <Text style={{ ...FONTS.h3 }}>{label}</Text>
      </View>
      {/* Radio Button */}
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={onPress}
      >
        <Animated.View
          style={{
            width: "100%",
            height: 4,
            borderRadius: 3,
            backgroundColor: lineColorAnimated,
          }}
        />
        <Animated.View
          style={{
            position: "absolute",
            left: radioAnimated,
            width: 30,
            height: 30,
            borderRadius: 15,
            borderWidth: 4,
            borderColor: circleColorAnimated,
            backgroundColor: COLORS.white,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileRadioButton;
