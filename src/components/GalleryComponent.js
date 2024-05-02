import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const GalleryComponent = () => {
    return (
        <View>
            <View>
                <Image source={require('../../assets/Images/gallery.png')} style={Styles.icons} />
            </View>
            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start" }}>
                <Image source={require('../../assets/Images/igpost1.jpg')} style={Styles.images} />
                <Image source={require('../../assets/Images/igpost2.jpg')} style={Styles.images} />
                <Image source={require('../../assets/Images/igpost3.jpg')} style={Styles.images} />
                <Image source={require('../../assets/Images/igpost4.jpg')} style={Styles.images} />

            </View>

        </View>
    )
}

export default GalleryComponent
const Styles = StyleSheet.create({
    icons: {
        height: 40,
        width: 40,
        marginLeft: "10%"
    },
    images: {
        width: "50%",
        height: 200
    }
});