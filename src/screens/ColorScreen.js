import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import MyText from "../components/MyText";

const ColorScreen = () => {
  const [color, setColor] = useState([]);
  console.log(color);
  return (
    <View style={{ height: "100%", backgroundColor: "black" }}>
      <Button
        onPress={() => {
          setColor([...color, randomRgb()]);
        }}
        title="Add a Color"
      />
      <FlatList
        keyExtractor={(item, index) => index}
        data={color}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
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

let UNIQUE_ID = 0;

const createUniqueId = () => {
  UNIQUE_ID += 1;
  return UNIQUE_ID;
};

const styles = StyleSheet.create({});

export default ColorScreen;
