import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

const IconButton = ({ icon, containerStyle, iconStyle, onPress }) => {
  return (
    <TouchableOpacity style={{ ...containerStyle }} onPress={onPress}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          tintColor: COLORS.primary,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
