import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import AddButton from '../Components/AddButton'

const Profile = ({navigation}) => {
    const localId = useSelector((state)=>state.auth.localId)
    
  return (
    <View>
      <Image 
      source={require("../assets/user.png")}
      style={styles.image}
      resizeMode='cover'
      />
      <AddButton  title={"Agregar Imagen de perfil"} onPress={()=> navigation.navigate("ImageSelector")}/>
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