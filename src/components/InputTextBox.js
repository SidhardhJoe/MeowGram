import { View, placeholder, StyleSheet, TextInput, onChangeText } from 'react-native'
import React from 'react'

const InputTextBox = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.mainContainer}
                placeholder="User Name"
                onChangeText={onChangeText}
            >hello</TextInput>
        </View>
    )
}

export default InputTextBox
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
        justifyContent: "center",
        borderRadius: 15
    }
})
