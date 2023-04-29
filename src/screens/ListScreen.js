import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const ListScreen = () => {
  const enemies = [
    { name: "Enemy #1", age: 20 },
    { name: "Enemy #2", age: 30 },
    { name: "Enemy #3", age: 40 },
    { name: "Enemy #4", age: 50 },
    { name: "Enemy #5", age: 60 },
    { name: "Enemy #6", age: 70 },
    { name: "Enemy #7", age: 80 },
    { name: "Enemy #8", age: 90 },
    { name: "Enemy #9", age: 100 },
  ];
  return (
    <FlatList
      style={styles.container}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(enemy) => enemy.name}
      data={enemies}
      renderItem={({ item }) => {
        console.log(item);
        return (
          <View>
            <Text style={styles.placement}>
              {item.name} - Age {item.age}
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PRESS</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  placement: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 30,
    color: "orange",
  },
  button: {
    alignItems: "center",
    backgroundColor: "dodgerblue",
    padding: 10,
  },
  buttonText: {
    color: "orange",
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "black",
    color: "white",
  },
});

export default ListScreen;
