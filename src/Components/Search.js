import {Keyboard , Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import color from "../utils/Global/color";
import { AntDesign } from "@expo/vector-icons";


const Search = ({ handlerKeyword }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const handlerInput = (t) => setInput(t);

  const search = () => {
    const expression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (expression.test(input)) {
      setError("Caracteres invalidos");
      return;
    }
    setError("");
    handlerKeyword(input);
    Keyboard.dismiss();
  };

  const resetSearch = () => {
    handlerKeyword("");
    handlerInput("");
    setError("");
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Buscar"
          value={input}
          onChangeText={handlerInput}
          style={styles.input}
        />
        <Pressable onPress={search}>
          <AntDesign name="search1" size={25} color="black" />
        </Pressable>
        <Pressable onPress={resetSearch}>
          <AntDesign name="closecircle" size={25} color="black" />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bgFondo,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },  
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#3E0A96",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    flex: 1,
    height: 40,
    color: "#A3AAB8",
  
  },
  errorText: {
    color: "red",
    paddingHorizontal: 10,
  },
});
