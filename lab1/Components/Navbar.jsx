import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {navigationOptions} from "../helpers/navigationOptions";
import Icon from "react-native-vector-icons/Ionicons";


export const Navbar = () => {
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
        <View style={styles.navbar}>
            {navigationOptions.screens.map(page => (
                <TouchableOpacity
                    key={page.route}
                    style={styles.navbarItem}
                    onPress={() => navigateTo(page.route)}
                >
                    <Icon name={page.icon} size={20} color={getIconColor(page.route)}/>
                    <Text style={{...styles.navbarItemTitle, color: getIconColor(page.route)}}>
                        {page.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
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
});