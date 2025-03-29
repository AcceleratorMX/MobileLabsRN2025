import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export const Header = () => (
    <View style={headerStyles.header}>
        <Image
        source={require('../assets/images/ztu-logo.png')}
        style={headerStyles.headerImage}
        resizeMode="center"/>
        <Text style={headerStyles.headerTitle}>MyFirstApp</Text>
    </View>
);

const headerStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%'

    },
    headerImage: {
        maxWidth: 120,
        maxHeight: 40,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});