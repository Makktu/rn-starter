import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Go To Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go To List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go To Image Screen"
        onPress={() => navigation.navigate("Images")}
      />
      <Button
        title="Go To Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go To Color Screen"
        onPress={() => navigation.navigate("Colors")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: "whitesmoke",
  },
  container: {
    backgroundColor: "black",
    height: "100%",
  },
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
