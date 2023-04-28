import React from "react";
import { ScrollView } from "react-native";
import Header from "./src/components/Header";
import Categories from "./src/components/Categories";
import Popular from "./src/components/Popular";

export default function App() {
  return (
    <ScrollView style={{ padding: 24, paddingTop: 50 }}>
      <Header />
      <Categories />
      <Popular />
    </ScrollView>
  );
}
