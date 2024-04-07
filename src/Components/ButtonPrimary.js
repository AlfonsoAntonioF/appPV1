import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../utils/Global/color'

const ButtonPrimary = ({title,onPress,style={}}) => {
  return (
    <TouchableOpacity style={[style,styles.container]} onPress={onPress}>
        <Text style={styles.text} >{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.cardBg,
        paddingHorizontal:10,
        paddingVertical:8,
        margin:10,
        borderRadius:5
    },
    text:{
        color:"white",
        textAlign:"center",
        fontSize:18
    }
})