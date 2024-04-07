import { StyleSheet, Text, View , Pressable} from 'react-native'
import React from 'react'
import colors from '../utils/Global/color'
const SubmitButton = ({title,onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
</Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    button:{
        width:"60%",
        backgroundColor:colors.descri,
        padding:10,
        alignItems:"center",
        borderRadius:10
    },
    text:{
        textAlign:"center",
        color:"white",
        fontSize:18
    }
})