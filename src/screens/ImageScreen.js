import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Image Screen</Text>
      <ImageDetail title="Forest" />
      <ImageDetail title="Mountain" />
      <ImageDetail title="Lake" />
      <ImageDetail title="Meadow" />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    textAlign: "center",
    marginTop: 300,
    color: "#f77f07",
  },
  container: {
    height: "100%",
    backgroundColor: "black",
  },
});

export default ImageScreen;
