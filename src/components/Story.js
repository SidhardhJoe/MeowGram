import { View, Text, Image } from 'react-native'
import React from 'react'

const Story = ({ nameofuser }) => {
    return (
        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Image source={require("../../assets/Images/image2.jpg")} style={{
                width: 80, height: 80, borderRadius: 100, marginLeft: 8,
            }} />
            <Text style={{ fontWeight: "500" }}>{nameofuser}</Text>
        </View>
    )
}

export default Story