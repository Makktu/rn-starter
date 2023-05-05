import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import MyText from "../components/MyText";
import MyView from "../components/MyView";

const PlayScreen = () => {
  return (
    <MyView>
      <MyText text="Play Screen" />
      <FlatList
        keyExtractor={(item, index) => index}
        data={DATA}
        renderItem={({ item }) => {
          return <MyText text={item} />;
        }}
      />
    </MyView>
  );
};

const DATA = ["Skull", "a", "of", "place", "the"];

const styles = StyleSheet.create({});

export default PlayScreen;
