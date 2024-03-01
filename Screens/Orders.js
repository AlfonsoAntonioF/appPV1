import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import orders from '../Data/orders.json'
import OrderItem from '../Components/OrderItem'

const Orders = () => {
  return (
    <FlatList
    data = {orders}
    keyExtractor={(item) => item.id}
    renderItem={({item})=><OrderItem order={item} />}
    />

  )
}

export default Orders

const styles = StyleSheet.create({})