import React from 'react';
import {Text, View} from 'react-native';
import {STYLES} from '../../styles';
import {TEXTS} from '../../constants';

const StorageInfo = ({storage}) => (
    <View style={STYLES.storageInfo}>
        <Text>{TEXTS.TOTAL_SPACE}: {storage?.total ?? 0} MB</Text>
        <Text>{TEXTS.FREE_SPACE}: {storage?.free ?? 0} MB</Text>
        <Text>{TEXTS.USED_SPACE}: {storage?.used ?? 0} MB</Text>
    </View>
);

export default StorageInfo;