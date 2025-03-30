import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ScreensHeader} from './Screens/ScreensHeader';
import {navigationOptions} from '../helpers/navigationOptions';
import {Navbar} from "./Navbar";

const Stack = createStackNavigator();

export const Main = () => {
    return (
        <NavigationContainer>
            <View style={mainStyles.main}>
                <Navbar/>
                <View style={mainStyles.content}>
                    <Stack.Navigator
                        initialRouteName="Home"
                        screenOptions={({route}) => {
                            const screenTitle = navigationOptions.getTitleForRoute(route.name);
                            return screenTitle
                                ? {header: () => <ScreensHeader screenTitle={screenTitle}/>}
                                : {headerShown: false};
                        }}
                    >
                        {navigationOptions.screens.map(screen => (
                            <Stack.Screen
                                key={screen.route}
                                name={screen.route}
                                component={screen.component}
                                options={{title: screen.title}}
                            />
                        ))}
                    </Stack.Navigator>
                </View>
            </View>
        </NavigationContainer>
    );
};

const mainStyles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
    },
    content: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});