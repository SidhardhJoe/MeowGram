import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ProfilePage from '../screen/ProfilePage'
import ReelsPage from '../screen/ReelsPage'
import RecommendationsPage from '../screen/RecommendationsPage'
import { View, Image, Text } from "react-native"

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name=" " component={RecommendationsPage}

                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: () => (
                        <View>
                            <Image source={require('../../assets/Images/home.png')} style={{
                                height: 30,
                                width: 30,
                                marginTop: "10%"
                            }} />
                        </View>
                    )
                }} />
            <Tab.Screen name="   " component={ReelsPage} options={{
                tabBarIcon: () => (
                    <View>
                        <Image source={require('../../assets/Images/compass.png')} style={{
                            height: 30,
                            width: 30,
                            marginTop: "10%"
                        }} />
                    </View>
                )
            }} />
            <Tab.Screen name="  " component={ProfilePage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../../assets/Images/user.png')} style={{
                                height: 30,
                                width: 30,
                                marginTop: "10%"
                            }} />
                        </View>
                    )
                }} />
        </Tab.Navigator >
    )
}

export default BottomNavigation
