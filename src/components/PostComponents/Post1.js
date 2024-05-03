import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Post1 = () => {
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <Image source={require("../../../assets/Images/image3.jpg")} style={Styles.profile} />
                <Text style={{ marginLeft: "4%", marginTop: "3%", fontSize: 16 }}>Nelson_M</Text>
            </View>
            <View>
                <Image source={require("../../../assets/Images/NelsonPost1.jpg")} style={Styles.igpost} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image source={require("../../../assets/Images/like.png")} style={Styles.like} />
                    <Image source={require("../../../assets/Images/timeline.png")} style={Styles.like} />
                    <Image source={require("../../../assets/Images/send.png")} style={Styles.like} />
                </View>
                <View style={{}}>
                    <Image source={require("../../../assets/Images/bookmark.png")} style={Styles.bookmark} />
                </View>
            </View>
            <View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image source={require("../../../assets/Images/image5.jpg")} style={Styles.likepic} />
                    <Text style={{ padding: 9 }}>Liked by James and 45,899 others</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ fontWeight: 600, marginLeft: "3%", marginRight: "2%" }}> Nelson_M MeowGram is like the best gram ever. It is soo versatile</Text>

                </View>
            </View>
        </View >
    )
}

export default Post1
const Styles = StyleSheet.create({
    profile: {
        height: 30,
        width: 30,
        borderRadius: 50,
        marginLeft: "2.5%",
        marginTop: "2%",
        marginBottom: "2%"
    },
    igpost: {
        width: "100%"
    },
    like: {
        height: 30,
        width: 30,
        marginLeft: "3%",
        marginTop: "3%",
        marginRight: "3%"
    },
    bookmark: {
        height: 30,
        width: 30,
        marginTop: "20%",
        justifyContent: "flex-end",
    },
    likepic: {
        height: 20,
        width: 20,
        borderRadius: 10,
        marginTop: "2%",
        marginLeft: "3%"

    }
});