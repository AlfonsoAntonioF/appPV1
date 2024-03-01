import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Entypo} from '@expo/vector-icons'
import colors from '../src/color'

const TabBarIcon = ({title,nameIcon,focused}) => {
  return (
    <View>
      <Entypo name={nameIcon} size={25} color={focused ? colors.iconFocused:colors.shadowColor}/>
      <Text style={[styles.text,!focused && styles.textFocused]} >{title}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    text:{
        color:colors.iconFocused,
        textAlign:"center",
        fontSize:15
    },
    textFocused:{
        color: colors.shadowColor,
    }

})