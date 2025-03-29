import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const Home = () => {
    return (
        <View style={homeStyles.home}>
            <Text>home</Text>
        </View>
    );
};

const homeStyles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#fff',
    },
});