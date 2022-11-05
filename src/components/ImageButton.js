import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { SIZES } from "../constants";

const ImageButton = ({
  containerStyle,
  image,
  imageStyle,
  onPress,
  activeOpacity,
}) => {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 2,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
    >
      <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
        <Image
          source={image}
          resizeMode="cover"
          style={{
            ...imageStyle,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImageButton;
