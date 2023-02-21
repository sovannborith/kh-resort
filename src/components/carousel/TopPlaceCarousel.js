import { FlatList, Text, View } from "react-native";
import React, { useCallback } from "react";
import { COLORS } from "../../constants";
import ResortCardComponent from "../ResortCardComponent";

const TopPlaceCarousel = ({ data }) => {
  const resortKeyExtractor = useCallback(
    (item) => `resort-${item.id.toString()}`,
    []
  );
  return (
    <View>
      <FlatList
        horizontal={true}
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={resortKeyExtractor}
        snapToAlignment="center"
        pagingEnabled={true}
        renderItem={({ item }) => <ResortCardComponent item={item} />}

        // renderItem={({ item }) => {
        //   return <Text>{item.resort_name}</Text>;
        // }}
      />
    </View>
  );
};

export default TopPlaceCarousel;
