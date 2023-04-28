import React from "react";
import { Text, TouchableHighlight, Image } from "react-native";
import { COLORS, SIZES } from "../constants/styles";

const CategoryItem = ({ title, image }) => {
  return (
    <TouchableHighlight
      onPress={() => {}}
      underlayColor={COLORS.secondary}
      style={{
        height: 110,
        borderRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 7,
        width: "30%",
        marginBottom: 30,
        backgroundColor: COLORS.gray,
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
      </>
    </TouchableHighlight>
  );
};

export default CategoryItem;
