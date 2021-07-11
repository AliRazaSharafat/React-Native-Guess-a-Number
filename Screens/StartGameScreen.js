import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const inputHandler = (e) => {
    setEnteredValue(e.replace(/[^0-9]/g, ""));
  };
  const resetHandler = () => {
    setEnteredValue("");
    setConfirm(false);
  };
  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert("Invalid Number", "Please Enter a Valid Number", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    setSelectedNumber(chosenNumber);
    setConfirm(true);
    setEnteredValue("");
    Keyboard.dismiss();
  };
  let outputConfirm = null;
  if (confirm) {
    outputConfirm = (
      <Card style={styles.numberSummary}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Start Game"
          onPress={() => props.onGameStart(selectedNumber)}
          color={Colors.primary}
        />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.startGame}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            value={enteredValue}
            onChangeText={inputHandler}
            style={styles.input}
            autoCapitalize="none"
            //   autoFocus={true}
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            //   placeholder='Enter a Number'
            blurOnSubmit
            keyboardAppearance="dark"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetHandler}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {outputConfirm}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  startGame: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    width: "45%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  numberSummary: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
