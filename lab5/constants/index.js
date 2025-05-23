import * as FileSystem from 'expo-file-system';

export const COLORS = {
    PRIMARY: '#007AFF',
    DANGER: '#FF3B30',
    NEUTRAL: '#666',
    BACKGROUND: '#fff',
    BORDER: '#ccc',
    FOLDER: '#FFD700',
    FILE: '#666',
    TEXT: '#333',
};

export const ICONS = {
    FOLDER: 'folder',
    FILE: 'file',
    BACK: 'arrow-up',
    INFO: 'info-circle',
    DELETE: 'trash',
    CREATE: 'plus',
    CLOSE: 'times',
    CREATE_FOLDER: 'folder-plus',
    CREATE_FILE: 'file-medical',
    SAVE: 'check',
    CANCEL: 'times',
};

export const TEXTS = {
    TOTAL_SPACE: 'Total Space',
    FREE_SPACE: 'Free Space',
    USED_SPACE: 'Used Space',
    PATH: 'Path',
    NEW_FOLDER: 'New folder',
    NEW_FILE: 'New file',
    DELETE_CONFIRM: 'Delete',
    INFO: 'Info',
    NAME: 'Name',
    TYPE: 'Type',
    SIZE: 'Size',
    MODIFIED: 'Modified',
    ENTER_FOLDER_NAME: 'Enter folder name',
    ENTER_FILE_NAME: 'Enter file name',
    FILE_CONTENT: 'Text...',
};

export const PATHS = {
    APP_DATA: `${FileSystem.documentDirectory}AppData/`,
};

export const TYPES = {
    ITEM: {
        FOLDER: 'folder',
        FILE: 'file',
    },
    EXTENSION: {
        FOLDER: 'dir',
        TEXT: '.txt',
    },
    MODAL: {
        CREATE: 'create',
        DELETE: 'delete',
        INFO: 'info',
    },
};

export const NAVIGATION = {
    FILE_EDITOR: 'FileEditor',
};