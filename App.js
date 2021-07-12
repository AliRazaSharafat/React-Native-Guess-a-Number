import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from "./Screens/GameOverScreen";

export default function App() {
  const [userGuess, setUserGuess] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const startGameHandler = (e) => {
    setUserGuess(e);
    setGuessRound(0);
  };
  const guessRoundHandler = (rounds) => {
    setGuessRound(rounds);
  };
  const configureRestartGame = () => {
    setUserGuess();
    setGuessRound(0);
  };
  let content = <StartGameScreen onGameStart={startGameHandler} />;

  if (userGuess && guessRound <= 0) {
    content = (
      <GameScreen userChoice={userGuess} onGameOver={guessRoundHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen
        gameRounds={guessRound}
        userNumber={userGuess}
        onRestart={configureRestartGame}
      />
    );
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
