import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../utils/Global/color'
import fonts from '../utils/Global/fonts'
import {AntDesign} from "@expo/vector-icons"
import { useDispatch, useSelector } from 'react-redux'
import { deleteSession } from '../utils/db'
import { clearUser } from '../features/auth/authSlice'

const Header = ({title="Piskis'Store", navigation}) => {
  const dispatch = useDispatch();
  const idToken = useSelector( (state) => state.auth.idToken )

  const onLogout = () => {
    dispatch(clearUser());
    deleteSession();
  }



  return (
    <View style={styles.container}>
      {navigation.canGoBack() && 
      <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} color="black"/>

      </Pressable>
      }
      <Text style={styles.text} >{title}</Text>

      { idToken && (

        <Pressable  style={styles.logoutIcon} onPress={onLogout} >
          <AntDesign name="logout" size={30} color="white" />
        </Pressable>


      ) }
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
  logoutIcon: {
    position: "absolute",
    right: 10,
    bottom: 15,
  },
})