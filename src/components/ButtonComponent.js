import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../screen/MainPage';

const ButtonComponent = () => {
    const navigation = useNavigation();
    return (

        <View style={styles.container}>
            <View style={styles.buttonNew}>
                <TouchableOpacity onPress={() => navigation.navigate('MainPage')} >
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
        width: 350,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        borderColor: "black",
        backgroundColor: "#405DE6"

    }
})