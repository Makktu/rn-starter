import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ImageDetail from "../components/ImageDetail";
import Uparrow from "../../assets/up-arrow.png";
import Downarrow from "../../assets/down-arrow.png";

const reducer = (state, action) => {
  // state === {count: number, arrow: "up" || "down"}
  // action === {type: "change_count" && "change_arrow", payload: 1 && "up" || "down"}
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload, arrow: "up" };
    case "decrease":
      return { ...state, count: state.count + action.payload, arrow: "down" };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, arrow: "" });

  return (
    <View style={styles.view}>
      <Button
        onPress={() => dispatch({ type: "increase", payload: 1 })}
        title="Increase"
      />
      <Button
        onPress={() => dispatch({ type: "decrease", payload: -1 })}
        title="Decrease"
      />
      <Text style={styles.text}>Current Count: {state.count}</Text>
      <ImageDetail
        image={
          state.arrow == "" ? null : state.arrow == "up" ? Uparrow : Downarrow
        }
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
