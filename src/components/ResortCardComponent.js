import { View, Text } from "react-native";
import React from "react";

const ResortCardComponent = ({ item }) => {
  return (
    <View>
      <Text>{item.id}</Text>
    </View>
  );
};

export default ResortCardComponent;
