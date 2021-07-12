import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = ({ gameRounds, userNumber, onRestart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.gameOver}>The Game is Over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          //  source={require("../assets/success.png")}
          source={{
            uri: "https://images.unsplash.com/photo-1524281423221-234569bc0438?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          }}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.text}>
        Your phone needed <Text style={styles.highLight}>{gameRounds}</Text>{" "}
        round(s) to find number{" "}
        <Text style={styles.highLight}>{userNumber}</Text>{" "}
      </Text>
      <View style={styles.restartButton}>
        <MainButton onPress={onRestart}>New Game</MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gameOver: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    width: 300,
    height: 300,
    marginVertical: 15,
    borderColor: Colors.secondary,
    borderWidth: 5,
    borderRadius: 150,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  restartButton: {
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 50,
  },
  highLight: {
    color: "red",
  },
});

export default GameOverScreen;
