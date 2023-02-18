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
  favorite: "Favorite",
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
    id: 2,
    label: screens.favorite,
    icon: require("../assets/icons/heart_active.png"),
  },
  {
    id: 3,
    label: screens.profile,
    icon: require("../assets/icons/profile.png"),
  },
];

export default {
  register_options,
  screens,
  home_bottom_tabs,
};
