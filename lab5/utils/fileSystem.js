import * as FileSystem from 'expo-file-system';
import { PATHS, TYPES } from '../constants';

const handleError = (error, message) => {
    console.error(`${message}:`, error);
};

export const getFileType = (file) => {
    let type = '';
    if (file.isDirectory) {
        type = TYPES.EXTENSION.FOLDER;
        return type.toUpperCase();
    }
    type = file.name.split('.').pop();
    return type.toUpperCase();
};

const ensureDirectory = async (path) => {
    const info = await FileSystem.getInfoAsync(path);
    if (!info.exists || !info.isDirectory) {
        await FileSystem.makeDirectoryAsync(path, { intermediates: true });
    }
};

export const fileSystem = {
    init: async () => {
        try {
            await ensureDirectory(PATHS.APP_DATA);
        } catch (error) {
            handleError(error, 'Error initializing AppData directory');
        }
    },

    list: async (path) => {
        try {
            await ensureDirectory(path);
            const contents = await FileSystem.readDirectoryAsync(path);
            const items = await Promise.all(
                contents.map(async (name) => {
                    const info = await FileSystem.getInfoAsync(`${path}${name}`);
                    return { name, isDirectory: info.isDirectory, ...info };
                })
            );
            return items.sort((a, b) => {
                if (a.isDirectory && !b.isDirectory) return -1;
                if (!a.isDirectory && b.isDirectory) return 1;
                return a.name.localeCompare(b.name);
            });
        } catch (error) {
            handleError(error, 'Error listing directory');
            return [];
        }
    },

    storage: async () => {
        try {
            const total = await FileSystem.getTotalDiskCapacityAsync();
            const free = await FileSystem.getFreeDiskStorageAsync();
            return {
                total: (total / 1024 / 1024).toFixed(2),
                free: (free / 1024 / 1024).toFixed(2),
                used: ((total - free) / 1024 / 1024).toFixed(2),
            };
        } catch (error) {
            handleError(error, 'Error getting storage info');
            return { total: 0, free: 0, used: 0 };
        }
    },

    create: async (path, name, content = '', isFolder) => {
        try {
            const itemPath = `${path}${name}${isFolder ? '' : TYPES.EXTENSION.TEXT}`;
            if (isFolder) {
                await FileSystem.makeDirectoryAsync(itemPath);
            } else {
                await FileSystem.writeAsStringAsync(itemPath, content);
            }
        } catch (error) {
            handleError(error, 'Error creating item');
        }
    },

    remove: async (path) => {
        try {
            await FileSystem.deleteAsync(path);
        } catch (error) {
            handleError(error, 'Error deleting item');
        }
    },

    read: async (path) => {
        try {
            return await FileSystem.readAsStringAsync(path);
        } catch (error) {
            handleError(error, 'Error reading file');
            return '';
        }
    },

    save: async (path, content) => {
        try {
            await FileSystem.writeAsStringAsync(path, content);
        } catch (error) {
            handleError(error, 'Error saving file');
        }
    },
};