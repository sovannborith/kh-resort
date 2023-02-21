import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { FONTS, COLORS, SIZES, icons, images } from "../constants";
import IconButton from "./IconButton";
// import SeparatorLine from "./SeparatorLine";
// const STATUSBAR_HEIGHT = 80;
const HeaderComponent = ({
  containerStyle,
  title,
  leftComponent,
  onPress,
  iconStyle,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "space-between",
          justifyContent: "center",
          paddingHorizontal: SIZES.padding,
          ...containerStyle,
        }}
      >
        {/* Left */}

        <IconButton
          containerStyle={{
            widtth: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={onPress}
          icon={icons.menu}
          iconStyle={{
            width: 25,
            height: 25,
            tintColor: COLORS.primary,
            ...iconStyle,
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              ...FONTS.h2,
              fontWeight: "800",
              color: COLORS.primary,
            }}
          >
            {title}
          </Text>
        </View>
        {/* Right */}
        <IconButton
          containerStyle={{
            widtth: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={onPress}
          icon={icons.notification}
          iconStyle={{
            width: 25,
            height: 25,
            tintColor: COLORS.primary,
            ...iconStyle,
          }}
        />
      </View>
      {/* <SeparatorLine
        lineStyle={{ backgroundColor: COLORS.gray05, marginTop: SIZES.radius }}
      /> */}
    </View>
  );
};

export default HeaderComponent;
