
import { StyleSheet, View, ScrollView, Image, TextInputComponent } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import InputTextBoxo from '../components/InputTextBox';



export default function LoginPage() {
    return (<View style={flex = 1}>

        <ScrollView>
            <View>
                <Image source={require("../../assets/Images/InstagramText.png")} style={styles.logo} />
            </View>
            <View style={styles.inputbox}>
                <InputTextBoxo placeholder="UserName" />
            </View>
            <View style={{ marginTop: "3%" }}>
                <InputTextBoxo placeholder="Password" />
            </View>
            <View style={{ marginTop: "5%" }}>
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
