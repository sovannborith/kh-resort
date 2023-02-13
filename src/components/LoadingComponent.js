import React from "react";

import LottieView from "lottie-react-native";
import { COLORS, FONTS } from "../constants";
import { Text, View } from "react-native";

const LoadingComponent = ({ size, label }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        flex: 1,
        zIndex: 999,
        opacity: 0.9,
      }}
    >
      <Text
        style={{
          color: COLORS.primary,
          ...FONTS.body3,
        }}
      >
        {label}
      </Text>
      <LottieView
        style={{
          width: "50%",
          alignSelf: "center",
        }}
        source={require("../assets/animations/loading.json")}
        autoPlay
        speed={2}
        loop={true}
      />
    </View>
  );
};

export default LoadingComponent;
