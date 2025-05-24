import React from 'react';
import {Text, View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {STYLES} from '../styles';
import {COLORS} from '../constants';

const EmptyList = () => (
    <View style={STYLES.emptyContainer}>
        <FontAwesome5 name="tasks" size={48} color={COLORS.ICON_GRAY}/>
        <Text style={STYLES.emptyText}>Немає завдань</Text>
        <Text style={STYLES.emptySubtext}>Додайте своє перше завдання</Text>
    </View>
);

export default EmptyList;