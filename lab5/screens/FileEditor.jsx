import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {STYLES} from '../styles';
import {COLORS, ICONS, TEXTS} from '../constants';
import {useFileEditor} from '../hooks/useFileEditor';

const FileEditor = ({route, navigation}) => {
    const {filePath} = route.params;
    const {content, setContent, handleSave} = useFileEditor({filePath, navigation});

    return (
        <View style={STYLES.container}>
            <TextInput
                style={STYLES.fileInput}
                multiline
                value={content}
                onChangeText={setContent}
                placeholder={TEXTS.FILE_CONTENT}
            />
            <View style={STYLES.modalButtonGroup}>
                <TouchableOpacity
                    style={[STYLES.modalButton, STYLES.modalConfirmButton]}
                    onPress={handleSave}
                >
                    <FontAwesome5 name={ICONS.SAVE} size={24} color={COLORS.BACKGROUND}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[STYLES.modalButton, STYLES.modalCancelButton]}
                    onPress={() => navigation.goBack()}
                >
                    <FontAwesome5 name={ICONS.CANCEL} size={24} color={COLORS.BACKGROUND}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FileEditor;