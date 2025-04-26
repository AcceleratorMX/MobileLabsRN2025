import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import GameScreen from './screens/GameScreen';
import TasksScreen from './screens/TasksScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Game">
                    <Stack.Screen
                        name="Game"
                        component={GameScreen}
                        options={{
                            title: 'Клікер',
                            headerTitleAlign: 'center',
                        }}
                    />
                    <Stack.Screen
                        name="Tasks"
                        component={TasksScreen}
                        options={{
                            title: 'Завдання',
                            headerTitleAlign: 'center',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
