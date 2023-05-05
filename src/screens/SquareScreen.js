import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MyView from "../components/MyView";
import MyText from "../components/MyText";

import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  return (
    <MyView>
      <ColorCounter type="Red" />
      <ColorCounter type="Green" />
      <ColorCounter type="Blue" />
    </MyView>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
