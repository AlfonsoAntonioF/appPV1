import { Pressable, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import cart from '../Data/cart.json'
import CartItem from '../Components/CartItem'
import fonts from '../src/fonts'
import { useSelector } from 'react-redux'
const Cart = () => {
    const cart = useSelector((state) => state.cart )
    
  return (
    <View>
      <FlatList
      data={cart.items}

      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.confirmContainer}>
            <Pressable>
                <Text style={styles.confirmText}>Confirmar</Text>
            </Pressable>
            <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
        </View>

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        marginBottom:130
    },
    confirmContainer:{
        flexDirection:"row",
        backgroundColor:"gray",
        padding:25,
        justifyContent:"space-between",
    },
    confirmText:{
        fontFamily:fonts.sansBold,
        fontSize:18,
        color:"white"
    }
})