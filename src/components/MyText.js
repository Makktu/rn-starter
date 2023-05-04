import React from "react";
import { Text, StyleSheet } from "react-native";

const MyText = ({ text, fontsize }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "orangered",
    fontSize: 30,
  },
});

export default MyText;
