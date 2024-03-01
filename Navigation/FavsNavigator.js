import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const  Stack = createNativeStackNavigator()
const FavsNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Favoritos"
    screenOptions={({navigation}) => {
      return {
        header : () => {
          return <Header title='Favoritos' navigation={navigation} />

        }
      }
    }}
    
    >
      <Stack.Screen
        name="EnDesarrollo"
        component={() => (
          <View style={styles.container}>
            <Text style={styles.text}>En desarrollo</Text>
          </View>
        )}
      />

    </Stack.Navigator>
   
  )
}

export default FavsNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})