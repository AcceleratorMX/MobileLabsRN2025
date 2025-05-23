import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {STYLES} from '../../styles';
import {COLORS, ICONS, TEXTS} from '../../constants';
import {formatDate} from '../../utils/formatDate';
import {getFileType} from "../../utils/fileSystem";

const InfoModal = ({data, onClose}) => {
    if (!data) return null;

    return (
        <>
            <Text style={STYLES.modalTitle}>{TEXTS.INFO}</Text>
            <Text style={STYLES.modalText}>{TEXTS.NAME}: {data.name}</Text>
            <Text style={STYLES.modalText}>{TEXTS.TYPE}: {getFileType(data)}</Text>
            <Text style={STYLES.modalText}>{TEXTS.SIZE}: {(data.size / 1024).toFixed(2)} KB</Text>
            <Text style={STYLES.modalText}>{TEXTS.MODIFIED}: {formatDate(data.modificationTime)}</Text>
            <View style={STYLES.modalButtonGroup}>
                <TouchableOpacity
                    style={[STYLES.modalButton, STYLES.modalCancelButton]}
                    onPress={onClose}
                >
                    <FontAwesome5 name={ICONS.CANCEL} size={24} color={COLORS.BACKGROUND}/>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default InfoModal;