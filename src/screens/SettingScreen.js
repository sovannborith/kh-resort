import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";

const SettingScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray05 }}>
      <Text>Setting Screen</Text>
    </SafeAreaView>
  );
};

export default SettingScreen;
