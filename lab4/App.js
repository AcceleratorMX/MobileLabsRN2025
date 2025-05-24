import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {STYLES} from './styles';
import MainScreen from './screens/MainScreen';
import {useOneSignal} from './hooks/useOneSignal';

export default function App() {
    useOneSignal();

    return (
        <View style={STYLES.appContainer}>
            <StatusBar style="light"/>
            <MainScreen/>
        </View>
    );
}