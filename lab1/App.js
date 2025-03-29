import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Footer} from "./Components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start worasdaking on your app!</Text>
      <StatusBar style='auto' />
      <Footer></Footer>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
