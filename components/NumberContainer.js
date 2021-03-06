import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderColor: Colors.secondary,
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 22,
    color: Colors.secondary,
  },
});

export default NumberContainer;
