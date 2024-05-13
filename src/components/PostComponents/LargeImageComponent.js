import { View, Image } from 'react-native'
import React from 'react'

const LargeImageComponent = () => {
    return (
        <View>
            <Image source={require("../../../assets/Images/ReelsPageImages/r2long.jpg")} style={{
                height: 300,
                width: 150,
                borderColor: "white",
                borderWidth: 0.5
            }} />
        </View>
    )
}

export default LargeImageComponent