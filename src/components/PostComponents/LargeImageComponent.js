import { View, Image } from 'react-native'
import React from 'react'

const LargeImageComponent = () => {
    return (
        <View>
            <Image source={require("../../../assets/Images/ReelsPageImages/r2long.jpg")} style={{
                height: 300,
                width: 150
            }} />
        </View>
    )
}

export default LargeImageComponent