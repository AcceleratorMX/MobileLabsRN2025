import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const Profile = () => {
    return (
        <View style={profileStyles.profile}>
            <Text>profile</Text>
        </View>
    );
};

const profileStyles = StyleSheet.create({
    profile: {
        flex: 1,
        backgroundColor: '#fff',
    },
});