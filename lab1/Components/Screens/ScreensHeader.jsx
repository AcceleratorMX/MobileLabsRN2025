import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const ScreensHeader = ({screenTitle}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{screenTitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'fit-content',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
    }
})