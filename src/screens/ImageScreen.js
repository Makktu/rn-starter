import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import ImageDetail from "../components/ImageDetail";

import Beach from "../../assets/beach.jpg";
import Mountain from "../../assets/mountain.jpg";
import Forest from "../../assets/forest.jpg";

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Image Screen</Text>
      <ImageDetail title="Forest" image={Forest} score="4" />
      <ImageDetail title="Mountain" image={Mountain} score="9" />
      <ImageDetail title="Beach" image={Beach} score="0" />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    textAlign: "center",
    marginTop: 30,
    color: "#f77f07",
  },
  container: {
    height: "100%",
    backgroundColor: "black",
  },
});

export default ImageScreen;
