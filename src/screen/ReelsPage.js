import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ReelsPageComponent from '../components/ReelsPageComponent'
import LargeImageComponent from '../components/PostComponents/LargeImageComponent'

const ReelsPage = () => {
    return (
        <ScrollView contentContainerStyle={{ display: "flex" }} >
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", width: "63.3%", flexWrap: "wrap" }}>
                    <ReelsPageComponent />
                    <ReelsPageComponent />
                    <ReelsPageComponent />
                    <ReelsPageComponent />
                </View>
                <View>
                    <LargeImageComponent />
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", width: "63.3%", flexWrap: "wrap" }}>
                    <ReelsPageComponent />
                    <ReelsPageComponent />
                    <ReelsPageComponent />
                    <ReelsPageComponent />
                </View>
                <View>
                    <LargeImageComponent />
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", width: "63.3%", flexWrap: "wrap" }}>
                    <ReelsPageComponent />
                    <ReelsPageComponent />
                    <ReelsPageComponent />
                    <ReelsPageComponent />
                </View>
                <View>
                    <LargeImageComponent />
                </View>
            </View>
        </ScrollView >
    )
}

export default ReelsPage