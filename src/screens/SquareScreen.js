import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyView from "../components/MyView";
import MyText from "../components/MyText";

import ColorCounter from "../components/ColorCounter";

let COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <MyView>
      <ColorCounter
        onIncrease={() => (red < 255 ? setRed(red + COLOR_INCREMENT) : null)}
        onDecrease={() => (red > 0 ? setRed(red - COLOR_INCREMENT) : null)}
        type="Red"
      />
      <ColorCounter
        onIncrease={() =>
          green < 255 ? setGreen(green + COLOR_INCREMENT) : null
        }
        onDecrease={() =>
          green > 0 ? setGreen(green - COLOR_INCREMENT) : null
        }
        type="Green"
      />
      <ColorCounter
        onIncrease={() => (blue < 255 ? setBlue(blue + COLOR_INCREMENT) : null)}
        onDecrease={() => (blue > 0 ? setBlue(blue - COLOR_INCREMENT) : null)}
        type="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </MyView>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
