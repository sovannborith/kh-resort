const register_options = [
  {
    id: 0,
    label: "STUDENT",
  },
  {
    id: 1,
    label: "TUTOR",
  },
];

const screens = {
  home: "Home",
  location: "Location",
  profile: "Profile",
};

const home_bottom_tabs = [
  {
    id: 0,
    label: screens.home,
    icon: require("../assets/icons/home.png"),
  },
  {
    id: 1,
    label: screens.location,
    icon: require("../assets/icons/location.png"),
  },
  {
    id: 3,
    label: screens.profile,
    icon: require("../assets/icons/profile.png"),
  },
];

const spicy_level = [
  {
    id: 0,
    label: "No",
    value: "no",
  },
  {
    id: 1,
    label: "Low",
    value: "low",
  },
  {
    id: 2,
    label: "Medium",
    value: "medium",
  },
  {
    id: 3,
    label: "High",
    value: "high",
  },
];

const cook_level = [
  {
    id: 1,
    label: "Low",
    value: "low",
  },
  {
    id: 2,
    label: "Medium",
    value: "medium",
  },
  {
    id: 3,
    label: "High",
    value: "high",
  },
];
const order_option = [
  {
    id: 1,
    label: "Dine-In",
    value: "dine_in",
  },
  {
    id: 2,
    label: "Picked Up",
    value: "picked_up",
  },
  {
    id: 3,
    label: "Delivery",
    value: "delivery",
  },
];

const track_order_status = [
  {
    id: "dine_in",
    status: [
      {
        id: 1,
        title: "Order Confirmed",
        sub_title: "Your order has been received",
      },
      {
        id: 2,
        title: "Order Prepared",
        sub_title: "Your order has been prepared",
      },
      {
        id: 3,
        title: "Order Searved",
        sub_title: "Your order has been searved",
      },
      {
        id: 4,
        title: "Rate Us",
        sub_title: "Help us improve our service",
      },
    ],
  },
  {
    id: "picked_up",
    status: [
      {
        id: 1,
        title: "Order Confirmed",
        sub_title: "Your order has been received",
      },
      {
        id: 2,
        title: "Order Prepared",
        sub_title: "Your order has been prepared",
      },
      {
        id: 3,
        title: "Order Picked Up",
        sub_title: "Your order has been picked up",
      },
      {
        id: 4,
        title: "Rate Us",
        sub_title: "Help us improve our service",
      },
    ],
  },
  {
    id: "delivery",
    status: [
      {
        id: 1,
        title: "Order Confirmed",
        sub_title: "Your order has been received",
      },
      {
        id: 2,
        title: "Order Prepared",
        sub_title: "Your order has been prepared",
      },
      {
        id: 3,
        title: "Delivery in Progress",
        sub_title: "Hang on! Your food is on the way",
      },
      {
        id: 4,
        title: "Delivered",
        sub_title: "Enjoy your meal!",
      },
      {
        id: 5,
        title: "Rate Us",
        sub_title: "Help us improve our service",
      },
    ],
  },
];

export default {
  register_options,
  screens,
  home_bottom_tabs,
  spicy_level,
  cook_level,
  order_option,
  track_order_status,
};
