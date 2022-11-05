import React from "react";
import { View, Text } from "react-native";
import { SIZES, icons } from "../constants";
import IconButton from "../components/IconButton";

const SectionComponent = ({
  containerStyle,
  headerStyle,
  title,
  sub_title,
  onPress,
  labelStyle,
  subTitleLabelStyle,
  children,
}) => {
  return (
    <View
      style={{
        flex: 1,
        ...containerStyle,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          ...headerStyle,
        }}
      >
        <View>
          <Text style={{ flex: 1, ...labelStyle }}>{title}</Text>
          <Text
            style={{
              flex: 1,
              marginBottom: SIZES.radius,
              ...subTitleLabelStyle,
            }}
          >
            {sub_title}
          </Text>
        </View>
        <IconButton
          icon={icons.right_arrow}
          onPress={onPress}
          containerStyle={{}}
          iconStyle={{ width: 25, height: 25 }}
        />
      </View>
      {children}
    </View>
  );
};

export default SectionComponent;
