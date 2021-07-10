import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StartGameScreen = () => {
  return (
    <View style={styles.startGame}>
      <Text>The Game Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  startGame: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 10,
    alignItems: "center",
  },
});

export default StartGameScreen;
