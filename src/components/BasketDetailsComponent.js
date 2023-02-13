import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Animated from "react-native-reanimated"; // withDelay, // withTiming, // useSharedValue, // useAnimatedStyle, // interpolate,
import { useDispatch, useSelector } from "react-redux";
import { selectedRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasketById,
  selectedBasketItems,
  selectedBasketTotal,
} from "../features/basketSlice";

import IconButton from "../components/IconButton";
import LoadingComponent from "../components/LoadingComponent";
import RadioButtonComponent from "../components/RadioButtonComponent";
import SeparatorLine from "../components/SeparatorLine";
import TextButton from "../components/TextButton";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { urlFor } from "../data/sanity";
import { useNavigation } from "@react-navigation/native";

const BasketDetailsComponent = ({
  radioButtons,
  onClosePress,
  onRemoveAllDish,
  onOrderOptionChange,
  onSpecialInstructionChange,
}) => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectedRestaurant);
  const basketItems = useSelector(selectedBasketItems);
  const basketTotal = useSelector(selectedBasketTotal);
  const DELIVERY_FEE = 2;
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [selectedOrderOption, setSelectedOrderOption] = useState(null);

  // const headerSharedValue = useSharedValue(80);

  // headerSharedValue.value = withDelay(500, withTiming(0, { duration: 500 }));
  // const closedFadeAnimatedStyle = useAnimatedStyle(() => {
  //   return {
  //     opacity: interpolate(headerSharedValue.value, [80, 0], [0, 1]),
  //   };
  // });

  useEffect(() => {
    const groupedItems = basketItems.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
    return () => groupedItems;
  }, [basketItems]);

  function renderBackButton() {
    return (
      <Animated.View
        style={[
          {
            widtth: 35,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.radius / 2,
            borderRadius: SIZES.padding * 2,
            shadowColor: COLORS.gray50,
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 0.5,
            elevation: 3,
          },
          // closedFadeAnimatedStyle,
        ]}
      >
        <IconButton
          onPress={onClosePress}
          icon={icons.cross}
          iconStyle={{
            width: 25,
            height: 25,
            tintColor: COLORS.white,
          }}
        />
      </Animated.View>
    );
  }

  function renderOrderButton() {
    return (
      <View
        style={{
          position: "absolute",
          left: 0,
          bottom: SIZES.height > 700 ? -100 : -70,
          right: 0,
          width: "100%",
          backgroundColor: COLORS.white,
        }}
      >
        <SeparatorLine
          lineStyle={{
            backgroundColor: COLORS.gray05,
            marginTop: 10,
            width: "100%",
          }}
        />
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            paddingTop: SIZES.padding,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: COLORS.gray50, ...FONTS.h4 }}>
              Order Options:
            </Text>
            {radioButtons.map((item, index) => {
              return (
                <RadioButtonComponent
                  key={`order-${item.id}`}
                  label={item.label}
                  isSelected={
                    `${selectedOrderOption?.key}-${selectedOrderOption?.id}` ==
                    `order-${item.id}`
                  }
                  onPress={() => {
                    setSelectedOrderOption({ ...item, key: "order" });
                    onOrderOptionChange(item.id);
                  }}
                  containerStyle={{ marginRight: SIZES.radius / 2 }}
                />
              );
            })}
          </View>
          <View
            style={{ flex: 1, flexDirection: "row", marginTop: SIZES.radius }}
          >
            <Text
              style={{
                color: COLORS.gray50,
              }}
            >
              Special Instruction:{" "}
            </Text>
            <TextInput
              multiline={true}
              style={{
                height: 100,
                width: "65%",
                borderWidth: 1,
                borderColor: COLORS.gray10,
                borderRadius: SIZES.radius,
                padding: SIZES.radius,
              }}
              onChangeText={(e) => {
                onSpecialInstructionChange(e);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.padding,
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: COLORS.gray80, ...FONTS.h4 }}
            >
              Sub Total:
            </Text>
            <Text
              style={{ fontWeight: "bold", color: COLORS.gray80, ...FONTS.h4 }}
            >
              {basketTotal}$
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: COLORS.gray80, ...FONTS.h4 }}
            >
              Delivery Fee:
            </Text>
            <Text
              style={{ fontWeight: "bold", color: COLORS.gray80, ...FONTS.h4 }}
            >
              {selectedOrderOption?.value === "delivery" ? DELIVERY_FEE : 0}$
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: COLORS.gray80, ...FONTS.h4 }}
            >
              Total:
            </Text>
            <Text
              style={{ fontWeight: "bold", color: COLORS.gray80, ...FONTS.h4 }}
            >
              {selectedOrderOption?.value === "delivery"
                ? basketTotal + DELIVERY_FEE
                : basketTotal}
              $
            </Text>
          </View>

          <TextButton
            containerStyle={{
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.radius,
              height: 60,
              marginTop: 10,
              shadowColor: COLORS.gray50,
              shadowOffset: { width: 3, height: 3 },
              shadowOpacity: 0.5,
              elevation: 3,
            }}
            label="Order Now"
            labelStyle={{
              fontWeight: "bold",
              ...FONTS.h3,
            }}
            onPress={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                navigation.reset({
                  index: 0,
                  routes: [{ name: "OrderCompleted" }],
                });
              }, 3000);
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, height: "100%" }}
    >
      <KeyboardAwareScrollView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                ...FONTS.h2,
              }}
            >
              Basket Details
            </Text>
            <View
              style={{
                shadowColor: COLORS.gray50,
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 0.5,
                elevation: 3,
              }}
            >
              <Image
                source={{ uri: urlFor(restaurant?.restaurant_image).url() }}
                resizeMode="cover"
                style={{
                  marginTop: 10,
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                }}
              />
            </View>

            <Text style={{ color: COLORS.gray40, ...FONTS.body4 }}>
              {restaurant.restaurant_name}
            </Text>
            <SeparatorLine
              lineStyle={{
                backgroundColor: COLORS.gray05,
                marginTop: 10,
              }}
            />
          </View>
          <View style={{ height: SIZES.height > 700 ? 500 : 350 }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: SIZES.padding,
                marginTop: 20,
                paddingBottom: 120,
              }}
            >
              {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                // <Shadow
                //   size={[SIZES.width - SIZES.padding * 2, 80]}
                //   style={{ marginBottom: 40 }}
                // >

                // </Shadow>
                <View
                  key={key}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: SIZES.radius,
                    backgroundColor: COLORS.lightGray,
                    borderRadius: SIZES.radius,
                    shadowColor: COLORS.gray50,
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.5,
                    elevation: 3,
                    marginBottom: SIZES.radius,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.gray80,
                      fontWeight: "500",
                      ...FONTS.body4,
                    }}
                  >
                    {items.length} x
                  </Text>
                  <Image
                    source={{ uri: urlFor(items[0]?.dish_image).url() }}
                    resizeMode="cover"
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      marginLeft: 10,
                    }}
                  />
                  <Text
                    style={{
                      flex: 1,
                      marginLeft: 10,
                      color: COLORS.gray80,
                      fontWeight: "500",
                      ...FONTS.body4,
                    }}
                  >
                    {items[0]?.dish_name}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.gray80,
                      fontWeight: "500",
                      ...FONTS.body4,
                    }}
                  >
                    {items[0]?.dish_price}$
                  </Text>
                  <IconButton
                    icon={icons.cross}
                    containerStyle={{
                      paddingLeft: SIZES.radius,
                      shadowColor: COLORS.gray50,
                      shadowOffset: { width: 3, height: 3 },
                      shadowOpacity: 0.5,
                      elevation: 3,
                    }}
                    iconStyle={{
                      width: 20,
                      height: 20,
                      tintColor: COLORS.primary,
                    }}
                    onPress={() => {
                      dispatch(removeFromBasketById({ id: key }));
                    }}
                  />
                </View>
              ))}
            </ScrollView>

            {Object.entries(groupedItemsInBasket).length > 0 &&
              renderOrderButton()}
          </View>
        </View>
        {renderBackButton()}
        {loading && <LoadingComponent size={200} label="Ordering now..." />}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default BasketDetailsComponent;
