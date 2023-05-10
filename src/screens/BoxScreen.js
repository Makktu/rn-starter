import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    height: 110,
    width: 110,
    backgroundColor: "green",
  },
  viewTwoStyle: {
    height: 110,
    width: 110,
    backgroundColor: "blue",
    top: 110,
  },
  viewThreeStyle: {
    height: 110,
    width: 110,
    backgroundColor: "red",
  },
});

export default BoxScreen;
