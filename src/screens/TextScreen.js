import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import MyView from "../components/MyView";
import MyText from "../components/MyText";
// import "../data/switchdesk1.json";

let theText = "Enter Password";

const TextScreen = () => {
  const [input, setInput] = useState("");

  return (
    <MyView>
      <MyText myStyle={{ color: "cyan" }} text={theText} />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect="false"
        value={input}
        onChangeText={(newText) => setInput(newText)}
      />

      <MyText
        text={
          input.length >= 5 ? "" : "Password must be 5 characters or longer!"
        }
      />
    </MyView>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "white",
    backgroundColor: "#18181a",
    borderWidth: 1,
    color: "#c5c5d4",
    padding: 10,
    fontSize: 35,
  },
});

export default TextScreen;
