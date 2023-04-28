import React from "react";
import { View, Text } from "react-native";
import { SIZES } from "../constants/styles";
import { categories } from "../constants/categories";
import CategoryItem from "./CategoriesItem";

const Categories = () => {
  return (
    <View style={{ paddingTop: 60 }}>
      <Text style={{ fontSize: SIZES.h1, fontWeight: "bold" }}>Hey,</Text>
      <Text style={{ fontSize: SIZES.h1 }}>what's up?</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        {categories.map((category) => (
          <CategoryItem
            key={category.title}
            title={category.title}
            image={category.image}
          />
        ))}
      </View>
    </View>
  );
};

export default Categories;
