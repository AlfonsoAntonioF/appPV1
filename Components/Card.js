import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../src/color'


const Card = ({children, style }) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor:color.bgFondo,
        shadowColor:color.shadowColor,
        shadowOffset:{
            height:5,
            width:5,

        },
        elevation:15,
        shadowOpacity:0.25,
        shadowRadius:3,
        borderWidth:8,
        borderRadius:10,
        


    }
})