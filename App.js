
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import InputTextBox from './src/components/InputTextBox';
import ButtonComponent from './src/components/ButtonComponent';


export default function App() {
  return (
    <View style={flex = 1}>
      <ScrollView>
        <View style={styles.inputbox}>
          <InputTextBox placeolder />
        </View>
        <View>
          <ButtonComponent />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputbox: {
    marginTop: "12%"
  }
});
