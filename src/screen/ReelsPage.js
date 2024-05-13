import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ReelsPageComponent from '../components/ReelsPageComponent'
import LargeImageComponent from '../components/PostComponents/LargeImageComponent'

const ReelsPage = () => {
    return (
        <ScrollView contentContainerStyle={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
            <View style={{ flexDirection: "row" }}>
                <ReelsPageComponent />
                <ReelsPageComponent />
            </View>
            <LargeImageComponent />
            <ReelsPageComponent />
        </ScrollView>
    )
}

export default ReelsPage