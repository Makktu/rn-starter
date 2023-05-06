import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ type, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text style={{ color: "orangered", fontSize: 20 }}>{type}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${type}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${type}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
