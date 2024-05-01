import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native-web'

const RecommendationsPage = () => {
    return (
        <ScrollView style={{ height: "100%" }}>
            <Image source={require("../../assets/Images/user.png")} style={styles.profilepic} />
        </ScrollView>
    )
}

export default RecommendationsPage
const styles = StyleSheet.create({
    profilepic: {
        height: "10"
    }
})