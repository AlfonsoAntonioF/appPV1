import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EmptyListComponent = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{message}</Text>
    </View>
  );
};

export default EmptyListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
});
