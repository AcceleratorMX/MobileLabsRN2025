import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Home} from "./Screens/Home";
import {Gallery} from "./Screens/Gallery";
import {Profile} from "./Screens/Profile";

const Stack = createStackNavigator();

const Navbar = () => {
    const [activeRoute, setActiveRoute] = useState('Home');
    const navigation = useNavigation();

    const getIconColor = (screenName) => {
        return activeRoute === screenName ? '#1a6dfd' : '#707070';
    };

    const navigateTo = (routeName) => {
        setActiveRoute(routeName);
        navigation.navigate(routeName);
    };

    return (
        <View style={mainStyles.navbar}>
            <TouchableOpacity
                style={mainStyles.navbarItem}
                onPress={() => navigateTo('Home')}
            >
                <Icon name="home" size={20} color={getIconColor('Home')}/>
                <Text style={[mainStyles.navbarItemTitle, {color: getIconColor('Home')}]}>Головна</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={mainStyles.navbarItem}
                onPress={() => navigateTo('Gallery')}
            >
                <Icon name="images" size={20} color={getIconColor('Gallery')}/>
                <Text style={[mainStyles.navbarItemTitle, {color: getIconColor('Gallery')}]}>Галерея</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={mainStyles.navbarItem}
                onPress={() => navigateTo('Profile')}
            >
                <Icon name="person" size={20} color={getIconColor('Profile')}/>
                <Text style={[mainStyles.navbarItemTitle, {color: getIconColor('Profile')}]}>Профіль</Text>
            </TouchableOpacity>
        </View>
    );
};

export const Main = () => {
    return (
        <NavigationContainer>
            <View style={mainStyles.main}>
                <Navbar/>
                <View style={mainStyles.content}>
                    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                        <Stack.Screen name="Home" component={Home} options={{title: 'Головна'}}/>
                        <Stack.Screen name="Gallery" component={Gallery} options={{title: 'Галерея'}}/>
                        <Stack.Screen name="Profile" component={Profile} options={{title: 'Профіль'}}/>
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
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#f3f3f3',
    },
    navbarItem: {
        alignItems: 'center',
    },
    navbarItemTitle: {
        fontSize: 14,
        marginTop: 5,
    },
    content: {
        flex: 1,
        padding: 20,
    },
});