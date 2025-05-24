import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {STYLES} from '../../styles';
import {COLORS} from "../../constants";

const SubmitButton = ({onPress}) => (
    <TouchableOpacity style={STYLES.submitButton} onPress={onPress}>
        <Text style={STYLES.buttonText}>Додати</Text>
        <FontAwesome5 name="plus-circle" size={20} color={COLORS.WHITE_COLOR}/>
    </TouchableOpacity>
);

export default SubmitButton;