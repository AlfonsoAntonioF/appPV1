import { StyleSheet, Text, View, Pressable, TouchableOpacity} from "react-native";
import React from "react";
import colors from "../utils/Global/color";
const AddButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container,({ onPress }) => [
      {
        backgroundColor: onPress ? 'grey' : 'white',
        padding: 10,
        borderRadius: 10,
      },
    ]] } onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.cardBg,
        width:"90%",
        paddingVertical:8,
        margin:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        color:"white",
        textAlign:"center",
        fontSize:18
    }
});


