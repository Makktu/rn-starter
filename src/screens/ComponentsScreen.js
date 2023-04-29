import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

// import "./ComponentsScreenStyles.css" as styles;

const ComponentsScreen = (props) => {
  const myName = "John McNamara";
  return (
    <>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Getting started on a journey</Text>
        <Text style={styles.newTextStyle}>My name is {myName}</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
          <Text style={styles.textStyle}>To ListScreen</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    textAlign: "center",
    marginTop: 300,
    color: "#f77f07",
  },
  newTextStyle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    color: "white",
  },
  viewStyle: {
    backgroundColor: "#1a1918",
    color: "white",
    height: "100%",
  },
});

export default ComponentsScreen;
