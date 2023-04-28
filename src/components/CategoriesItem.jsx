import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { COLORS, SIZES } from "../constants/styles";

const CategoryItem = ({ title, image }) => {
  return (
    <View style={{ width: "30%", marginBottom: 30 }}>
      <TouchableHighlight
        onPress={() => {}}
        underlayColor={COLORS.secondary}
        style={{
          height: 100,
          borderRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "center",
          padding: 7,
        }}
      >
        <>
          <Image
            source={image}
            style={{ width: 40, height: 40, resizeMode: "contain" }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: SIZES.h3,
            }}
          >
            {title}
          </Text>
        </>
      </TouchableHighlight>
    </View>
  );
};

export default CategoryItem;
