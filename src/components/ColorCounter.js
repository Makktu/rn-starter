import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ type }) => {
  return (
    <View>
      <Text style={{ color: "orangered", fontSize: 20 }}>{type}</Text>
      <Button title={`Increase ${type}`} />
      <Button title={`Decrease ${type}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
