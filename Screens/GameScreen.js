import React, { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = ({ onGameOver, userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userChoice)
  );
  const [roundList, setRoundList] = useState([]);
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(roundList.length);
    }
  }, [currentGuess, userChoice, onGameOver]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Dont Lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRoundList((currentRounds) => [nextNumber, ...currentRounds]);
  };

  const listItem = (roundNumber, ind) => (
    <View style={styles.listItem} key={ind}>
      <Text>#{ind}</Text>
      <Text>{roundNumber}</Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton
          style={styles.lowerButton}
          onPress={() => nextGuessHandler("lower")}
        >
          <Ionicons name="md-remove" size={22} />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler("greater")}>
          <Ionicons name="md-add" size={22} />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {roundList.map((round, ind) =>
            listItem(round, roundList.length - ind)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "90%",
    justifyContent: "space-between",
  },
  lowerButton: {
    backgroundColor: Colors.secondary,
  },
  listContainer: {
    flex: 1,
    width: "80%",
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    flexDirection: "row",
    borderColor: "black",
    // backgroundColor: "#ccc",
    padding: 15,
    borderWidth: 1,
    width: "70%",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default GameScreen;
