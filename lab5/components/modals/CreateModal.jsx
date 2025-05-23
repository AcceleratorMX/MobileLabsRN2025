import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {STYLES} from '../../styles';
import {COLORS, ICONS, TEXTS} from '../../constants';
import {useModal} from '../../hooks/useModal';

const CreateModal = ({data, path, onClose, onAction}) => {
    const {name, setName, content, setContent, handleCreate} = useModal({path, data, onClose, onAction});

    return (
        <>
            <Text style={STYLES.modalTitle}>
                {data?.isFolder ? TEXTS.NEW_FOLDER : TEXTS.NEW_FILE}
            </Text>
            <TextInput
                style={STYLES.modalInput}
                placeholder={data?.isFolder ? TEXTS.ENTER_FOLDER_NAME : TEXTS.ENTER_FILE_NAME}
                value={name}
                onChangeText={setName}
            />
            {!data?.isFolder && (
                <TextInput
                    style={[STYLES.modalInput, STYLES.modalTextArea]}
                    placeholder={TEXTS.FILE_CONTENT}
                    value={content}
                    onChangeText={setContent}
                    multiline
                    numberOfLines={4}
                />
            )}
            <View style={STYLES.modalButtonGroup}>
                <TouchableOpacity
                    style={[STYLES.modalButton, STYLES.modalCancelButton]}
                    onPress={onClose}
                >
                    <FontAwesome5 name={ICONS.CANCEL} size={24} color={COLORS.BACKGROUND}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[STYLES.modalButton, STYLES.modalConfirmButton]}
                    onPress={handleCreate}
                >
                    <FontAwesome5 name={ICONS.SAVE} size={24} color={COLORS.BACKGROUND}/>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default CreateModal;