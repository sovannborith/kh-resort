import { FlatList, Text, View } from "react-native";
import React from "react";

const TopPlaceCarousel = ({ resorts }) => {
  return (
    <FlatList
      horizontal
      data={resorts}
      renderItem={(item) => {
        return <Text>{item.resort_name}</Text>;
      }}
    />
  );
};

export default TopPlaceCarousel;
