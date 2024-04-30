import { View, StyleSheet, TextInput, onChangeText } from 'react-native'
import React from 'react'

const InputTextBoxo = ({ placeholder }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.mainContainer}
                placeholder={placeholder}
                onChangeText={onChangeText}>
            </TextInput>
        </View>
    )
}

export default InputTextBoxo
const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    mainContainer: {
        height: 45,
        width: 350,
        paddingHorizontal: 15,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center"
    }
})
