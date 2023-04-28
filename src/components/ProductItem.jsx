import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { COLORS, SIZES } from "../constants/styles";

const ProductItem = ({ title, image, price }) => {
  return (
    <View style={{ width: "30%", marginBottom: 30 }}>
      <TouchableHighlight
        onPress={() => {}}
        underlayColor={COLORS.secondary}
        style={{
          height: 130,
          borderRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "space-between",
          padding: 7,
        }}
      >
        <>
          <Image
            source={image}
            style={{ width: 60, height: 60, resizeMode: "contain" }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: SIZES.h3,
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              textAlign: "center",
              fontSize: SIZES.h3,
              fontWeight: "bold",
            }}
          >
            {price}
          </Text>
        </>
      </TouchableHighlight>
    </View>
  );
};

export default ProductItem;
