import { useState } from 'react';
import { fileSystem } from '../utils/fileSystem';

export const useModal = ({ path, data, onAction, onClose }) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const handleCreate = () => {
        if (!name) return;
        fileSystem.create(path, name, content, data?.isFolder);
        setName('');
        setContent('');
        onAction();
        onClose();
    };

    const handleDelete = () => {
        if (data) {
            fileSystem.remove(`${path}${data.name}`);
            onAction();
        }
        onClose();
    };

    return {
        name,
        setName,
        content,
        setContent,
        handleCreate,
        handleDelete,
    };
};