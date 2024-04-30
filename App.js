
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/screen/LoginPage';
import MainPage from './src/screen/MainPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}