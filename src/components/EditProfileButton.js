import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EditProfileScreen from '../screen/EditProfileScreen';
import { StyleSheet } from 'react-native';


const EditProfileButton = ({ navigation }) => {
    const handlePress = () => {
        console.log("hello")
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={{ marginTop: "6%", textAlign: "center", color: "white" }}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditProfileButton;
const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 150,
        backgroundColor: "grey",
        borderRadius: 10,

    }
})