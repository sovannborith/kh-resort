import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCardComponent from "./CategoryCardComponent";
import { useNavigation } from "@react-navigation/native";

import sanityClient from "../data/sanity";

import { COLORS, FONTS, SIZES } from "../constants";

const CategoryListComponent = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = sanityClient
      .fetch(
        `*[_type == "tbl_categories"]{
            ...,
           
           }`
      )
      .then((data) => {
        setCategories(data);
      });

    return () => {
      fetchData;
    };
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: SIZES.padding,
        alignItems: "center",
        paddingHorizontal: SIZES.padding,
      }}
    >
      {categories.map((item, index) => (
        <CategoryCardComponent
          key={`category-${item._id}`}
          category={item}
          onPress={() =>
            navigation.navigate("RestaurantList", {
              type: "category",
              filter: item._id,
            })
          }
          containerStyle={{
            marginLeft: index == 0 ? 0 : SIZES.radius,
          }}
          textStyle={{
            color: COLORS.white,
            fontWeight: "bold",
            ...FONTS.h4,
          }}
        />
      ))}
    </ScrollView>
  );
};

export default CategoryListComponent;
