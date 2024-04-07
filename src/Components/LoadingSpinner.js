import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/Global/color'

const LoadingSpinner = () => {
  return (
    <View style={styles.container} >
      <ActivityIndicator size={70} color="white"  />
    </View>
  )
}

export default LoadingSpinner

const styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:colors.cardBg}
})