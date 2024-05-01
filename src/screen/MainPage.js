import { StyleSheet, Text, View, Image, PermissionsAndroid } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Camera',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
        } else {
            console.log('Camera permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
};

const MainPage = () => {
    return (
        <View>
            <View style={styles.main}>
                <TouchableOpacity onPress={requestCameraPermission}>
                    <Image source={require("../../assets/Images/camera.png")} style={styles.camera} />
                </TouchableOpacity>
                <Image source={require("../../assets/Images/InstagramText.png")} style={styles.iglogo} />
                <Image source={require("../../assets/Images/send.png")} style={styles.chat} />
            </View>

        </View>
    )
}

export default MainPage

const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "row"
    },
    camera: {
        width: 40,
        height: 40,
        marginTop: "100%",
        padding: 20,
        marginLeft: "2%",
    },
    iglogo: {
        height: 50,
        width: 150,
        marginTop: "13%",
        marginLeft: "22%",
        objectFit: "contain"
    },
    chat: {
        height: 40,
        width: 40,
        marginTop: "12%",
        marginLeft: "17%"
    }
})