import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, image, score }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{title}</Text>
      <Image source={image} />
      <Text style={styles.numberStyle}>
        {score ? "Your Score:" : null} {score ? score : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 2,
    color: "#a99d99",
  },
  numberStyle: {
    fontSize: 30,
    textAlign: "right",
    marginTop: 10,
    color: "yellow",
  },
});

export default ImageDetail;
