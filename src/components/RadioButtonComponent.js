import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { COLORS, FONTS, SIZES, icons } from "../constants";

const RadioButtonComponent = ({
  containerStyle,
  label,
  labelStyle,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
    >
      <Image
        source={isSelected ? icons.check_on : icons.check_off}
        style={{
          marginLeft: 5,
          width: 20,
          height: 20,
          tintColor: isSelected ? COLORS.primary : COLORS.gray20,
        }}
      />
      <Text
        style={{
          marginLeft: SIZES.radius / 2,
          color: COLORS.gray50,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioButtonComponent;
