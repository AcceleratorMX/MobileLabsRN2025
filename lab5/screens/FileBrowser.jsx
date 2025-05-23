import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { STYLES } from '../styles';
import { COLORS, ICONS, PATHS, TYPES } from '../constants';
import { useFileBrowser } from '../hooks/useFileBrowser';
import ModalComponent from '../components/ModalComponent';
import StorageInfo from '../components/browser/StorageInfo';
import PathDisplay from '../components/browser/PathDisplay';
import FileList from '../components/browser/FileList';
import FloatingActionButton from '../components/browser/FloatingActionButton';

const FileBrowser = ({ navigation }) => {
    const { state, handleItemPress, goUp, openModal, closeModal, refresh } = useFileBrowser(navigation);

    return (
        <View style={STYLES.container}>
            <View style={STYLES.header}>
                <StorageInfo storage={state.storage} />
                <PathDisplay path={state.path} />
                {state.path !== PATHS.APP_DATA && (
                    <TouchableOpacity style={STYLES.backButton} onPress={goUp}>
                        <FontAwesome5 name={ICONS.BACK} size={24} color={COLORS.BACKGROUND} />
                    </TouchableOpacity>
                )}
            </View>
            <FileList
                files={state.files}
                onItemPress={handleItemPress}
                onInfoPress={(item) => openModal(TYPES.MODAL.INFO, item)}
                onDeletePress={(item) => openModal(TYPES.MODAL.DELETE, item)}
            />
            <FloatingActionButton onCreatePress={(isFolder) => openModal(TYPES.MODAL.CREATE, { isFolder })} />
            {state.modal.visible && (
                <ModalComponent
                    type={state.modal.type}
                    visible={state.modal.visible}
                    data={state.modal.data}
                    path={state.path}
                    onClose={closeModal}
                    onAction={refresh}
                />
            )}
        </View>
    );
};

export default FileBrowser;