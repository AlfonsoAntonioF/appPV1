import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../src/color'
import fonts from '../src/fonts'
import {AntDesign} from "@expo/vector-icons"

const Header = ({title='Abarrotes HyA', navigation}) => {
  return (
    <View style={styles.container}>
      {navigation.canGoBack() && 
      <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} color="black"/>

      </Pressable>
      }
      <Text style={styles.text} >{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.encabezado,
        // flex: 1,
        paddingTop: 30,
        height: 80,
        marginTop:30,
        justifyContent:'center',
        alignItems:"Center"


    },
    text:{
        fontSize: 30,
        margin:5,
        justifyContent:'center',
        textAlign: "center",
        color: color.txt,
        fontWeight: "bold",
        fontFamily:fonts.sansBold,
    },
    goBack:{
      position:"absolute",
      left:10,
      bottom:15

  },
})