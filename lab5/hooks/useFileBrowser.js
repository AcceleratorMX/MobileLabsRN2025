import {useEffect, useState} from 'react';
import {fileSystem} from '../utils/fileSystem';
import {NAVIGATION, PATHS, TYPES} from '../constants';

export const useFileBrowser = (navigation) => {
    const [path, setPath] = useState(PATHS.APP_DATA);
    const [files, setFiles] = useState([]);
    const [storage, setStorage] = useState({total: 0, free: 0, used: 0});
    const [modal, setModal] = useState({type: null, visible: false, data: null});

    useEffect(() => {
        fileSystem.list(path).then(setFiles);
        fileSystem.storage().then(setStorage);
    }, [path]);

    const goToFolder = (folderName) => {
        setPath(`${path}${folderName}/`);
    };

    const goUp = () => {
        if (path !== PATHS.APP_DATA) {
            const parentPath = path.split('/').slice(0, -2).join('/') + '/';
            setPath(parentPath);
        }
    };

    const openFile = (item) => {
        if (!item.isDirectory && item.name.endsWith(TYPES.EXTENSION.TEXT)) {
            navigation.navigate(NAVIGATION.FILE_EDITOR, {filePath: `${path}${item.name}`});
        }
    };

    const handleItemPress = (item) => {
        if (item.isDirectory) {
            goToFolder(item.name);
        } else {
            openFile(item);
        }
    };

    const openModal = (type, data = null) => {
        setModal({type, visible: true, data});
    };

    const closeModal = () => {
        setModal({type: null, visible: false, data: null});
    };

    const refresh = () => {
        fileSystem.list(path).then(setFiles);
    };

    return {
        state: {path, files, storage, modal},
        goToFolder,
        goUp,
        openFile,
        handleItemPress,
        openModal,
        closeModal,
        refresh,
    };
};