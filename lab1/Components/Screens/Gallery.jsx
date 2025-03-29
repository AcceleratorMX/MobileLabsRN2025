import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const Gallery = () => {
    return (
        <View style={galleryStyles.gallery}>
            <Text>gallery</Text>
        </View>
    );
};

const galleryStyles = StyleSheet.create({
    gallery: {
        flex: 1,
        backgroundColor: '#fff',
    },
});