import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import AddButton from '../Components/AddButton'
import { useGetImageQuery, useGetUserLocationQuery } from '../app/services/profile'

const Profile = ({navigation}) => {
    const localId = useSelector((state)=>state.auth.localId)
    const {data:locationFormatted}=useGetUserLocationQuery(localId)
    const data = useGetImageQuery(localId)
    
  return (
    <View>
      <Image 
      source={data ? {uri:data.image}:require("../../assets/user.png")}
      style={styles.image}
      resizeMode='cover'
      />
      <Text style={styles.text}>{locationFormatted?.address}</Text>
      <AddButton  title={"Agregar Imagen de perfil"} onPress={()=> navigation.navigate("ImageSelector")}/>
      <AddButton title={"Agregar Direccion"} onPress={()=> navigation.navigate("LocationSelector")}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200
    }
})