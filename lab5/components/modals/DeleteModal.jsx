import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {STYLES} from '../../styles';
import {COLORS, ICONS, TEXTS} from '../../constants';
import {useModal} from '../../hooks/useModal';

const DeleteModal = ({data, path, onClose, onAction}) => {
    const {handleDelete} = useModal({path, data, onClose, onAction});

    return (
        <>
            <Text style={STYLES.modalTitle}>
                {TEXTS.DELETE_CONFIRM} {data?.name}?
            </Text>
            <View style={STYLES.modalButtonGroup}>
                <TouchableOpacity
                    style={[STYLES.modalButton, STYLES.modalCancelButton]}
                    onPress={onClose}
                >
                    <FontAwesome5 name={ICONS.CANCEL} size={24} color={COLORS.BACKGROUND}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[STYLES.modalButton, STYLES.modalDeleteButton]}
                    onPress={handleDelete}
                >
                    <FontAwesome5 name={ICONS.DELETE} size={24} color={COLORS.BACKGROUND}/>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default DeleteModal;