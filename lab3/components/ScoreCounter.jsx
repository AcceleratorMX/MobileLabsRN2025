import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ScoreCounter = ({score}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.scoreText}>Очки: {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 20,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    scoreText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default ScoreCounter;