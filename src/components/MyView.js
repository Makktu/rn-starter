import React from "react";
import { View, StyleSheet } from "react-native";

const MyView = (props) => {
  return <View style={styles.view}>{props.children}</View>;
};

const styles = StyleSheet.create({
  view: {
    height: "100%",
    backgroundColor: "black",
  },
});

export default MyView;
