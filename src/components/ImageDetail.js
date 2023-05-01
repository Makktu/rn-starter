import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ImageDetail = ({ title }) => {
  return <Text style={styles.textStyle}>{title}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    textAlign: "center",
    marginTop: 10,
    color: "#a99d99",
  },
});

export default ImageDetail;
