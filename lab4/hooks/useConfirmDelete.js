import {useState} from 'react';

export const useConfirmDelete = (onDelete, title) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const handleDeletePress = () => {
        setModalVisible(true);
    };

    const handleConfirmDelete = () => {
        setModalVisible(false);
        onDelete();
    };

    const handleCancelDelete = () => {
        setModalVisible(false);
    };

    return {
        isModalVisible,
        handleDeletePress,
        handleConfirmDelete,
        handleCancelDelete,
        modalTitle: `Видалити "${title}"?`,
    };
};