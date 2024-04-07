import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import orders from '../utils/Data/orders.json'
import OrderItem from '../Components/OrderItem'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../app/services/orders'

const Orders = () => {

  const localId = useSelector((state) => state.auth.localId)
  const {data:orders} = useGetOrdersQuery(localId)
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