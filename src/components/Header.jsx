import React from "react";
import { Image, Linking, TouchableHighlight, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <TouchableHighlight onPress={() => Linking.openURL("#")}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 60, height: 60 }}
        />
      </TouchableHighlight>
      <View>
        <Image
          source={require("../assets/shopcart.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>
    </View>
  );
};

export default Header;
