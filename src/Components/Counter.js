import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/cart/cartSlice";
import colors from "../utils/Global/color";
import fonts from "../utils/Global/fonts";
import ConfirmationModal from "./ConfirmationModal";

const Counter = ({ initialValue, textButton, product }) => {
  const [count, setCount] = useState(initialValue);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const closeModal = () => {
    setModalVisible(false);
  };



  const handlerAddCartItem = (quantity) => {
    dispatch(addCartItem({ ...product, quantity }));
    setCount(1);
  };
  


  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity
        style={[styles.Btn, { backgroundColor: colors.cardBg }]}
        onPress={() => setCount(count + 1)}
      >
        <Text style={{ color: "white" }}>+</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity
        style={[styles.Btn, { backgroundColor: colors.cardBg }]}
        onPress={() => setCount(count - 1 > 0 ? count - 1 : 0)}
      >
        <Text style={{ color: "white" }}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.BtnCard, { backgroundColor: colors.bgFondo }]}
      >
        <Button
          title={textButton}
          onPress={() => handlerAddCartItem(count)}
          color="white"
        />
      </TouchableOpacity>
      
      
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counterContainer: {
    width: 250,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
  text: {
    width: 30,
    textAlign: "center",
    fontSize: 15,
  },
  Btn: {
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  BtnCard: {
    borderRadius: 8,
    fontFamily: fonts.sansBold,
    fontSize: 12,
    height: 36,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
