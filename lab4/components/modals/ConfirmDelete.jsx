import React from 'react';
import { Modal, View, Text, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { STYLES } from '../../styles';
import { COLORS } from '../../constants';

const ConfirmDelete = ({ visible, onConfirm, onCancel, title = 'Видалити завдання?' }) => {
    const scaleValue = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        if (visible) {
            Animated.spring(scaleValue, {
                toValue: 1,
                friction: 8,
                tension: 40,
                useNativeDriver: true,
            }).start();
        } else {
            scaleValue.setValue(0);
        }
    }, [visible]);

    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={onCancel}
        >
            <View style={STYLES.modalOverlay}>
                <Animated.View
                    style={[
                        STYLES.modalContainer,
                        { transform: [{ scale: scaleValue }] },
                    ]}
                >
                    <Text style={STYLES.modalTitle}>{title}</Text>
                    <Text style={STYLES.modalMessage}>
                        Ви впевнені, що хочете видалити це завдання?
                    </Text>
                    <View style={STYLES.modalButtons}>
                        <TouchableOpacity
                            style={[STYLES.modalButton, STYLES.modalCancelButton]}
                            onPress={onCancel}
                        >
                            <FontAwesome5 name="times" size={16} color={COLORS.WHITE_COLOR} />
                            <Text style={STYLES.modalButtonText}>Скасувати</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[STYLES.modalButton, STYLES.modalConfirmButton]}
                            onPress={onConfirm}
                        >
                            <FontAwesome5 name="trash-alt" size={16} color={COLORS.WHITE_COLOR} />
                            <Text style={STYLES.modalButtonText}>Видалити</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
};

export default ConfirmDelete;