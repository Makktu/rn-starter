import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

import ImageDetail from "../components/ImageDetail";

import Uparrow from "../../assets/up-arrow.png";
import Downarrow from "../../assets/down-arrow.png";

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  const [arrow, setArrow] = useState("");

  const clickHandler = (upOrDown) => {
    if (upOrDown == "Inc") {
      setCount(count + 1);
      setArrow("up");
    } else {
      setCount(count - 1);
      setArrow("down");
    }
  };

  return (
    <View style={styles.view}>
      <Button onPress={() => clickHandler("Inc")} title="Increase" />
      <Button onPress={() => clickHandler("Dec")} title="Decrease" />
      <Text style={styles.text}>Current Count: {count}</Text>
      <ImageDetail
        image={arrow == "" ? null : arrow == "up" ? Uparrow : Downarrow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "orangered",
    alignItems: "center",
    alignSelf: "center",
  },
  arrows: {
    alignItems: "center",
    marginLeft: "30%",
  },
  view: {
    fontSize: 50,
    backgroundColor: "black",
    height: "100%",
    color: "orangered",
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
export default CounterScreen;
