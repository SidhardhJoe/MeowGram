import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'



const ShareProfileButton = ({ navigation }) => {
    const handlePress = () => {
        console.log("hello now")
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={{ marginTop: "6%", textAlign: "center", color: "white" }}>Share Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ShareProfileButton
const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 150,
        borderRadius: 10,
        backgroundColor: "grey",
    }
})