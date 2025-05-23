import {useEffect, useState} from 'react';
import {fileSystem} from '../utils/fileSystem';

export const useFileEditor = ({filePath, navigation}) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fileName = filePath.split('/').pop();
        navigation.setOptions({title: fileName});
        fileSystem.read(filePath).then(setContent);
    }, [filePath, navigation]);

    const handleSave = () => {
        fileSystem.save(filePath, content);
        navigation.goBack();
    };

    return {
        content,
        setContent,
        handleSave,
    };
};