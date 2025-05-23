import {StyleSheet} from 'react-native';
import {COLORS} from '../constants';

export const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.BACKGROUND,
    },
    header: {
        marginBottom: 10,
    },
    storageInfo: {
        marginBottom: 10,
    },
    pathContainer: {
        marginBottom: 10,
    },
    path: {
        fontSize: 16,
        color: COLORS.TEXT,
    },
    pathPart: {
        fontSize: 16,
        color: COLORS.TEXT,
    },
    currentPath: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.TEXT,
    },
    backButton: {
        backgroundColor: COLORS.PRIMARY,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    fileList: {
        flex: 1,
    },
    fileItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.BORDER,
    },
    fileInput: {
        flex: 1,
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
    },
    fileContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    fileIcon: {
        marginRight: 10,
    },
    fileName: {
        fontSize: 16,
        color: COLORS.TEXT,
    },
    fileActions: {
        flexDirection: 'row',
        gap: 10,
    },
    actionButton: {
        padding: 5,
    },
    fabContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        alignItems: 'flex-end',
    },
    fab: {
        backgroundColor: COLORS.PRIMARY,
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: COLORS.TEXT,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    fabMenu: {
        position: 'absolute',
        bottom: 66,
        right: 0,
        backgroundColor: 'transparent',
        gap: 10,
    },
    fabButton: {
        backgroundColor: COLORS.PRIMARY,
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: COLORS.TEXT,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: COLORS.BACKGROUND,
        padding: 20,
        borderRadius: 12,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.TEXT,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'left',
        width: '100%',
        color: COLORS.TEXT,
    },
    modalInput: {
        borderWidth: 1,
        borderColor: COLORS.BORDER,
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        width: '100%',
        color: COLORS.TEXT,
    },
    modalTextArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    modalButtonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    modalButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalToggleButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.BORDER,
    },
    modalCancelButton: {
        backgroundColor: COLORS.NEUTRAL,
    },
    modalConfirmButton: {
        backgroundColor: COLORS.PRIMARY,
    },
    modalDeleteButton: {
        backgroundColor: COLORS.DANGER,
    },
});