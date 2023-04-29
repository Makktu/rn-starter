import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const clickHandler = (pressed) => {
  console.log(pressed, "pressed!");
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <TouchableOpacity
        style={styles.button}
        title="Go To Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go To List Demo"
        onPress={() => navigation.navigate("List")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    // color: "whitesmoke",
  },
  // container: {
  //   backgroundColor: "black",
  //   height: "100%",
  // },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    color: "orangered",
    width: "50%",
  },
});

export default HomeScreen;
