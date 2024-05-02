import { StyleSheet, View, Image, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

import BottomNavigation from '../Navigation/BottomNavigation';
import ProfilePage from './ProfilePage';
import RecommendationsPage from './RecommendationsPage';
import ReelsPage from './ReelsPage';

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
    const [selectedTab, setSelectedTab] = useState('Recommendations');
    const renderSelectedTab = () => {
        switch (selectedTab) {
            case 'Recommendations':
                return <RecommendationsPage />;
            case 'Reels':
                return <ReelsPage />;
            default:
                return <ProfilePage />;
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.main}>
                <TouchableOpacity onPress={requestCameraPermission}>
                    <Image source={require("../../assets/Images/camera.png")} style={styles.camera} />
                </TouchableOpacity>
                <Image source={require("../../assets/Images/MeowGram.png")} style={styles.iglogo} />
                <Image source={require("../../assets/Images/send.png")} style={styles.chat} />
            </View>

            <BottomNavigation selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </View>
    )
}
export default MainPage;

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 0
    },
    camera: {
        width: 40,
        height: 40,
        marginTop: "100%"
    },
    iglogo: {
        height: 50,
        width: 150,
        resizeMode: "contain",
        marginTop: "10%"
    },
    chat: {
        height: 40,
        width: 40,
        marginTop: "10%"
    }
});
