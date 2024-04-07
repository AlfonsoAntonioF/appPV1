import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import colors from '../utils/Global/color'
import fonts from '../utils/Global/fonts'

const ModalMessage = ({text,textButton, onclose, modalVisible}) => {
  return (
    <Modal 
    visible={modalVisible}
            transparent={true}
            animationType='fade'
            onRequestClose={onclose}
            >
                <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>{text}</Text>
                    <ButtonPrimary title={textButton} onPress={onclose}/>
                </View>
            </View>

    </Modal>
  )
}

export default ModalMessage

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(0,0,0,0.8)",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    content:{
        width:"90%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.cardBg,
        padding:30,
        gap:20,
        borderRadius:5
    },
    text:{
        fontSize:16,
        color:"white",
        fontFamily:fonts.ProRegu,
    }
})