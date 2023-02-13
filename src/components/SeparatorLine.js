import React from "react";
import { View } from "react-native";
import { COLORS } from "../constants";

const SeparatorLine = ({ lineStyle }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 1,
        shadowColor: COLORS.gray30,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        elevation: 3,
        ...lineStyle,
      }}
    />
  );
};

export default SeparatorLine;
