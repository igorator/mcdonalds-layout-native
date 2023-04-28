import React from "react";
import { View, Text } from "react-native";
import { SIZES } from "../constants/styles";
import { popular } from "../constants/popular";
import ProductItem from "./ProductItem";

const Popular = () => {
  return (
    <View style={{ paddingTop: 5, marginBottom: 100 }}>
      <Text style={{ fontSize: SIZES.h1, fontWeight: "bold" }}>Popular</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        {popular.map((product) => (
          <ProductItem
            key={product.title}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </View>
    </View>
  );
};

export default Popular;
