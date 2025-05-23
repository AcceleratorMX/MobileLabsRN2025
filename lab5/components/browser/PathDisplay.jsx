import React from 'react';
import {Text, View} from 'react-native';
import * as FileSystem from 'expo-file-system';
import {STYLES} from '../../styles';
import {TEXTS} from '../../constants';

const PathDisplay = ({path}) => {
    const displayPath = path?.replace(FileSystem.documentDirectory, '/') ?? '/';
    const parts = displayPath.split('/').filter((part) => part);

    return (
        <View style={STYLES.pathContainer}>
            <Text style={STYLES.path}>
                {TEXTS.PATH}: /
                {parts.map((part, index) => (
                    <Text
                        key={index}
                        style={index === parts.length - 1 ? STYLES.currentPath : STYLES.pathPart}
                    >
                        {part}
                        {index < parts.length - 1 && '/'}
                    </Text>
                ))}
            </Text>
        </View>
    );
};

export default PathDisplay;