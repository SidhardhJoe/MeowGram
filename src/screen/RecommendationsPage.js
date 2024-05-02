import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native-web'
import Story from '../components/Story'

const RecommendationsPage = () => {

    return (
        <ScrollView style={{ height: "100%" }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={{ borderBottomWidth: 0.8, height: "100", display: "flex", flexDirection: "row" }}>

                        <Story nameofuser={'Ivana_'} />

                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require("../../assets/Images/image1.jpg")} style={{
                                width: 80, height: 80, borderRadius: 100, marginLeft: 8,
                            }} />
                            <Text style={{ fontWeight: "500" }}>John__</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require("../../assets/Images/image3.jpg")} style={{
                                width: 80, height: 80, borderRadius: 100, marginLeft: 8,
                            }} />
                            <Text style={{ fontWeight: "500" }}>Nelson_M.</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require("../../assets/Images/image4.jpeg")} style={{
                                width: 80, height: 80, borderRadius: 100, marginLeft: 8,
                            }} />
                            <Text style={{ fontWeight: "500" }}>_.Meegan._</Text>
                        </View><View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require("../../assets/Images/image5.jpg")} style={{
                                width: 80, height: 80, borderRadius: 100, marginLeft: 8,
                            }} />
                            <Text style={{ fontWeight: "500" }}>elena__</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require("../../assets/Images/image6.jpg")} style={{
                                width: 80, height: 80, borderRadius: 100, marginLeft: 8,
                            }} />
                            <Text style={{ fontWeight: "500" }}>Bigie_Jack</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require("../../assets/Images/image7.jpg")} style={{
                                width: 80, height: 80, borderRadius: 100, marginLeft: 8,
                            }} />
                            <Text style={{ fontWeight: "500" }}>_Eva</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require("../../assets/Images/image8.jpg")} style={{
                                width: 80, height: 80, borderRadius: 100, marginLeft: 8,
                            }} />
                            <Text style={{ fontWeight: "500" }}>Aleena_</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require("../../assets/Images/image9.jpg")} style={{
                                width: 80, height: 80, borderRadius: 100, marginLeft: 8,
                            }} />
                            <Text style={{ fontWeight: "500" }}>Chris_</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require("../../assets/Images/image10.jpg")} style={{
                                width: 80, height: 80, borderRadius: 100, marginLeft: 8,
                            }} />
                            <Text style={{ fontWeight: "500" }}>Damond</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    )
}

export default RecommendationsPage
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})