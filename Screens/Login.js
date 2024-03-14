import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import colors from '../src/color'
import fonts from '../src/fonts'
import { useLoginMutation } from '../src/app/services/auth'
import { loginSchema } from '../src/validations/authSchema'
import { useState } from 'react'
import { setUser } from '../src/features/auth/authSlice'
const Login = ({navigation}) => {
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")
    const [triggerLogin] = useLoginMutation()

    const onSubmit = async () => {
        try {
  
          loginSchema.validateSync({email,password})
          const {data} = await  triggerLogin({email,password})
          dispatch(setUser({email:data.email,idToken:data.idToken,localId:data.localId}))
  
        } catch (error) {
  
          setErrorEmail("")
          setErrorPassword("")
  
          switch(error.path){
            case "email":
              setErrorEmail(error.message)
              break
            case "password":
              setErrorPassword(error.message)
              break
            default:
              break
          }
  
        }
   
      }
  


  return (
    <View style={styles.main}>
            <View style={styles.container}>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={errorEmail}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                />
                <SubmitButton onPress={onSubmit} title="Iniciar Sesion"/>
                <Text style={styles.sub}>Aun no tienes una cuenta?</Text>
                <Pressable onPress={()=> navigation.navigate("Register")} >
                    <Text style={styles.subLink}>Registrate</Text>
                </Pressable>
            </View>
        </View>
  )
}

export default Login

const styles = StyleSheet.create({
    
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      },
      container:{
        width:"90%",
        backgroundColor:colors.bgFondo,
        gap:15,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:20
      },
      title:{
        fontSize:22,
        fontFamily:fonts.sansBold
      },
      sub:{
        fontSize:14,
        fontFamily:fonts.sansBlack
      },
      subLink:{
        fontSize:14,
        fontFamily:fonts.sansBlack,
        color:"blue"
      }
})