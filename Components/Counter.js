import { TextInput, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../src/features/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Button style={styles.Bttn} title="+" onPress={() => dispatch(increment())} />
      <Text>{count}</Text>
      <Button title="-" onPress={() => dispatch(decrement())} />
      <TextInput style={styles.input} onChangeText={(t) => setNumber(parseInt(t))} />
      <Button title="Cantidad" onPress={ () => dispatch(incrementByAmount(number)) } />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 5,
   
  },
  input: {
    borderWidth: 2,
    width: 50,
  },
  Bttn:{
    width:20,
    borderRadius:15,
    paddingVertical:8,
    backgroundColor:"#3498db",
    color:"white",
    fontSize:16,

  },
});
