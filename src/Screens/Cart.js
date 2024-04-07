import {
  Pressable,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {useState} from "react";
import CartItem from "../Components/CartItem";
import fonts from "../utils/Global/fonts";
import { useDispatch, useSelector } from "react-redux";
import { usePostOrderMutation } from "../app/services/orders";
import { deleteCart } from "../features/cart/cartSlice";
import ConfirmationModal from "../Components/ConfirmationModal";
import colors from "../utils/Global/color";
const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const localId = useSelector((state) => state.auth.localId);
  const [triggerAddOrder] = usePostOrderMutation();
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handlerAddOrder = async () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      createdAt,
      ...cart,
    };
    await triggerAddOrder({ localId, order });
    dispatch(deleteCart());
    setConfirmationMessage("Orden Generada satisfactoriamente")
    setModalVisible(true);
    // navigation.navigate("OrdersStack");
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate("OrdersStack");
  };

  return (
    <View>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.confirmContainer}>
        <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handlerAddOrder}>
          <Text style={styles.confirmButtonText}>Confirmar Compra </Text>
        </TouchableOpacity>
      </View>
      <ConfirmationModal
        visible={modalVisible}
        message={confirmationMessage}
        onClose={closeModal}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 130,
  },
  confirmContainer: {
    flexDirection: "row",
    backgroundColor: "gray",
    padding: 25,
    justifyContent: "space-between",
  },
  confirmText: {
    fontFamily: fonts.sansBold,
    fontSize: 18,
    color: "white",
  },
  confirmButtonText: {
    fontFamily: fonts.sansBold,
    fontSize: 18,
    color: colors.descri,
    alignContent: "center",
  },
});
