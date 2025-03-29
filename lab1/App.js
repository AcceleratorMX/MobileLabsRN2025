import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Footer} from "./Components/Footer";
import {Header} from "./Components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Header />
      <Footer />
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
