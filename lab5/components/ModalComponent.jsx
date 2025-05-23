import React from 'react';
import {Modal, View} from 'react-native';
import {STYLES} from '../styles';
import {TYPES} from '../constants';
import CreateModal from './modals/CreateModal';
import DeleteModal from './modals/DeleteModal';
import InfoModal from './modals/InfoModal';

const ModalComponent = ({type, visible, data, path, onClose, onAction}) => {
    const modals = {
        [TYPES.MODAL.CREATE]: CreateModal,
        [TYPES.MODAL.DELETE]: DeleteModal,
        [TYPES.MODAL.INFO]: InfoModal,
    };

    const ModalContent = modals[type] || null;

    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
            <View style={STYLES.modalContainer}>
                <View style={STYLES.modalContent}>
                    {ModalContent && (
                        <ModalContent data={data} path={path} onClose={onClose} onAction={onAction}/>
                    )}
                </View>
            </View>
        </Modal>
    );
};

export default ModalComponent;