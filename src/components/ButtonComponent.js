import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonNew}>
                <TouchableOpacity onPress={() => console.log("button pressed")} >
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    buttonNew: {
        height: 50,
        width: 100,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,

    }
})