import React from "react";

import { Easing } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import MainLayout from "../screens/MainLayout";
import RestaurantScreen from "../screens/Restaurants/RestaurantScreen";
import RestaurantDetailScreen from "../screens/Restaurants/RestaurantDetailScreen";
import FoodDetailScreen from "../screens/Foods/FoodDetailScreen";
import OrderCompletedScreen from "../screens/Order/OrderCompletedScreen";
import OrderTrackingScreen from "../screens/Order/OrderTrackingScreen";
import LocationScreen from "../screens/Dashboard/LocationScreen";

const Stack = createSharedElementStackNavigator();
const options = {
  gestureEnabled: false,
  transitionSpe: {
    open: {
      animation: "timing",
      config: { duration: 400, easing: Easing.inOut(Easing.ease) },
    },
    close: {
      animation: "timing",
      config: { duration: 400, easing: Easing.inOut(Easing.ease) },
    },
  },
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainLayout"
      screenOptions={{ useNativeDriver: true, headerShown: false }}
      detachInactiveScreen={true}
    >
      <Stack.Screen name="MainLayout" component={MainLayout} />
      <Stack.Screen name="RestaurantList" component={RestaurantScreen} />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailScreen}
        options={() => options}
        sharedElements={(route, otherRoute, showing) => {
          const { restaurant, sharedElementPrefix } = route.params;
          let foodSharedElementId = "";
          if (otherRoute.route.name === "FoodDetail") {
            const food = otherRoute.route.params.food;
            const foodSharedElementPrefix =
              otherRoute.route.params.sharedElementPrefix;
            otherRoute.route.params.sharedElementPrefix;
            foodSharedElementId = `${foodSharedElementPrefix}-food-image-${food?._id}`;
          } else {
            foodSharedElementId = "";
          }

          return [
            {
              id: `${sharedElementPrefix}-restaurant-image-${restaurant._id}`,
            },
            {
              id: foodSharedElementId,
            },
          ];
        }}
      />

      <Stack.Screen
        name="FoodDetail"
        component={FoodDetailScreen}
        options={() => options}
        sharedElements={(route, otherRoute, showing) => {
          const { food, sharedElementPrefix } = route.params;
          return [
            {
              id: `${sharedElementPrefix}-food-image-${food._id}`,
            },
          ];
        }}
      />

      <Stack.Screen name="OrderCompleted" component={OrderCompletedScreen} />
      <Stack.Screen name="OrderTracking" component={OrderTrackingScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
