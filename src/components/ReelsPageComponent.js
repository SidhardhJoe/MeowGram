import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

export default function ReelsPageComponent() {
  return (
    <View>
      <Image source={require("../../assets/Images/ReelsPageImages/r1.jpg")} style={{
        height: 150,
        width: 130,
        borderColor: "white",
        borderWidth: 0.5
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
})