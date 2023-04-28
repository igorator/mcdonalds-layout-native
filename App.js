import React from "react";
import { View } from "react-native";
import Header from "./src/components/Header";
import Categories from "./src/components/Categories";
import Popular from "./src/components/Popular";

export default function App() {
  return (
    <View style={{ padding: 24, paddingTop: 50 }}>
      <Header />
      <Categories />
      <Popular />
    </View>
  );
}
