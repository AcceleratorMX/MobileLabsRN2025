import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Main = () => (
    <View style={mainStyles.header}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ab, atque beatae blanditiis deserunt esse facilis fuga id, ipsa molestiae molestias nam non officia quis quos repellendus rerum ut velit vero!</Text>
    </View>
);

const mainStyles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});