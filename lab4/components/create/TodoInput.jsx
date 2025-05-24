import React from 'react';
import {TextInput} from 'react-native';
import {STYLES} from '../../styles';
import {COLORS} from '../../constants';

const TodoInput = ({value, onChangeText, placeholder, isMultiline = false}) => (
    <TextInput
        style={[STYLES.input, isMultiline && STYLES.multilineInput]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.PLACEHOLDER_TEXT}
        value={value}
        onChangeText={onChangeText}
        multiline={isMultiline}
    />
);

export default TodoInput;