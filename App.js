
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import InputTextBox from './src/components/InputTextBox';
import ButtonComponent from './src/components/ButtonComponent';


export default function App() {
  return (
    <View style={flex = 1}>
      <ScrollView>
        <View>
          <Image source={require("./assets/Images/InstagramText.png")} style={styles.logo} />
        </View>
        <View style={styles.inputbox}>
          <InputTextBox placeholder={"UserName"} />
        </View>
        <View style={{ marginTop: "3%" }}>
          <InputTextBox />
        </View>
        <View>
          <ButtonComponent />
        </View>
      </ScrollView >
    </View >
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: "60%",
    height: 100,
    width: 250,
    marginLeft: "20%",
    objectFit: "contain"
  }
});
