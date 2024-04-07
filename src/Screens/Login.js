import { StyleSheet, Text, View, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import colors from "../utils/Global/color";
import fonts from "../utils/Global/fonts";
import { useLoginMutation } from "../app/services/auth";
import { loginSchema } from "../utils/validations/authSchema";
import { useState } from "react";
import { setUser } from "../features/auth/authSlice";
import { deleteSession, insertSession } from "../utils/db";
import ModalMessage from "../Components/ModalMessage";
const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerLogin] = useLoginMutation();
  const [modalVisible, setModalVisible] = useState(false);

  const handlerCloseModal = () => {
    setModalVisible(false);
  };

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const { data, error } = await triggerLogin({ email, password });
      
      if (error) {
        console.log(error.data.error.message);
        setModalVisible(true);
      }

      deleteSession();
      insertSession(data);
      
      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        })
      );
    } catch (error) {
      setErrorEmail("");
      setErrorPassword("");

      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          break;
        case "password":
          setErrorPassword(error.message);
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
    
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
        <SubmitButton onPress={onSubmit} title="Iniciar Sesion" />
        <Text style={styles.sub}>Aun no tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.subLink}>Registrate</Text>
        </Pressable>
      </View>
    </View>
    <ModalMessage
        textButton="Volvera intentar"
        text="Email o Contraseña invalido"
        modalVisible={modalVisible}
        onclose={handlerCloseModal}
      />
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: colors.cardBg,
    gap: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.sansBold,
  },
  sub: {
    fontSize: 14,
    fontFamily: fonts.sansBlack,
  },
  subLink: {
    fontSize: 14,
    fontFamily: fonts.sansBlack,
    color: "blue",
  },
});
