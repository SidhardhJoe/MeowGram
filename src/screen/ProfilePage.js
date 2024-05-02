import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import EditProfileButton from '../components/EditProfileButton'
import ShareProfileButton from '../components/ShareProfileButton'

const ProfilePage = () => {
    return (
        <ScrollView>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View>
                    <Image source={require("../../assets/Images/image2.jpg")} style={styles.img1} />
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 18 }}>Ivana_</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ paddingLeft: 30, paddingTop: 45 }}>
                        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "500" }}>3</Text>
                        <Text>Posts</Text>
                    </View>
                    <View style={{ paddingLeft: 30, paddingTop: 45 }}>
                        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "500" }}>758</Text>
                        <Text>Followers</Text>
                    </View>
                    <View style={{ paddingLeft: 30, paddingTop: 45 }}>
                        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "500" }}>250</Text>
                        <Text>Following</Text>
                    </View>
                </View>
            </View>
            <View style={{ padding: 10, marginLeft: 10, width: 100 }}>
                <Text style={{ textAlign: "auto" }}>
                    you only live once
                </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }} >
                <View style={{ marginLeft: 10 }}>
                    <EditProfileButton />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <ShareProfileButton />
                </View>
            </View>
        </ScrollView >
    )
}

export default ProfilePage

const styles = StyleSheet.create({
    img1: {
        height: 120,
        width: 120,
        marginTop: "2%",
        marginLeft: "2%",
        borderRadius: 60
    }
});