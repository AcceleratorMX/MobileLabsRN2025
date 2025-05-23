import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {STYLES} from '../../styles';
import {COLORS, ICONS} from '../../constants';

const FileList = ({files, onItemPress, onInfoPress, onDeletePress}) => {
    const renderItem = ({item}) => (
        <View style={STYLES.fileItem}>
            <TouchableOpacity style={STYLES.fileContent} onPress={() => onItemPress(item)}>
                <FontAwesome5
                    name={item.isDirectory ? ICONS.FOLDER : ICONS.FILE}
                    size={20}
                    color={item.isDirectory ? COLORS.FOLDER : COLORS.FILE}
                    style={STYLES.fileIcon}
                />
                <Text style={STYLES.fileName}>{item.name}</Text>
            </TouchableOpacity>
            <View style={STYLES.fileActions}>
                <TouchableOpacity style={STYLES.actionButton} onPress={() => onInfoPress(item)}>
                    <FontAwesome5 name={ICONS.INFO} size={20} color={COLORS.PRIMARY}/>
                </TouchableOpacity>
                <TouchableOpacity style={STYLES.actionButton} onPress={() => onDeletePress(item)}>
                    <FontAwesome5 name={ICONS.DELETE} size={20} color={COLORS.DANGER}/>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <FlatList
            data={files ?? []}
            keyExtractor={(item) => item.name}
            renderItem={renderItem}
            style={STYLES.fileList}
        />
    );
};

export default FileList;