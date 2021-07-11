import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
export default function App() {
  const [userGuess, setUserGuess] = useState();
  const startGameHandler = (e) => {
    setUserGuess(e);
  };
  let content = <StartGameScreen onGameStart={startGameHandler} />;
  if (userGuess) {
    content = <GameScreen userChoice={userGuess} />;
  }
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
