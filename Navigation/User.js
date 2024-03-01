import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
Stack = createNativeStackNavigator()
const User = () => {
  return (
    <Stack.Navigator
    initialRouteName="User"
    screenOptions={({navigation}) => {
      return {
        header : () => {
          return <Header title='Mi cuenta' navigation={navigation} />

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

export default User

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