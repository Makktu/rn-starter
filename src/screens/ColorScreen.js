import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import MyText from "../components/MyText";

const ColorScreen = () => {
  return (
    <View style={{ height: "100%", backgroundColor: "black" }}>
      <Button title="Add a Color" />
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
      <MyText text="Hello" fontsize="30" />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
