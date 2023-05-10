import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyView from "../components/MyView";
import MyText from "../components/MyText";

import ColorCounter from "../components/ColorCounter";

let COLOR_INCREMENT = 15;

const checkConsole = (theName, theThing) => {
  console.log(theName, theThing);
};

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number};
  // action === {type: "change_red" || "change_green" || "change_blue", payload: 15 || -15}

  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  checkConsole("State", state);

  return (
    <MyView>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -COLOR_INCREMENT })
        }
        type="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -COLOR_INCREMENT })
        }
        type="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -COLOR_INCREMENT })
        }
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

// const [red, setRed] = useState(0);
// const [green, setGreen] = useState(0);
// const [blue, setBlue] = useState(0);

// const setColor = (color, change) => {
//   switch (color) {
//     case "red":
//       red + change > 255 || red + change < 0 ? null : setRed(red + change);
//       return;
//     case "green":
//       green + change > 255 || green + change < 0
//         ? null
//         : setGreen(green + change);
//       return;
//     case "blue":
//       blue + change > 255 || blue + change < 0
//         ? null
//         : setBlue(blue + change);
//       return;
//   }
// };

export default SquareScreen;
