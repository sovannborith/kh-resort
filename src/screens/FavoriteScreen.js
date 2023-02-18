import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";

const FavoriteScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray05 }}>
      <Text>Favorite Screen</Text>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
