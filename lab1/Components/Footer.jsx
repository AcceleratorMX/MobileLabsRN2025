import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Footer = () => (
    <View style={footerStyles.footer}>
        <Text>Карпінський Олександр, ВТ-23-2</Text>
    </View>
);

const footerStyles = StyleSheet.create({
    footer: {
        paddingVertical: 5,
        width: '100%',
        backgroundColor: '#f3f3f3',
        justifyContent: 'center',
        alignItems: 'center',
    }
});