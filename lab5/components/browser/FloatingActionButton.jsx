import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {STYLES} from '../../styles';
import {COLORS, ICONS} from '../../constants';

const FloatingActionButton = ({onCreatePress}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={STYLES.fabContainer}>
            {isOpen && (
                <View style={STYLES.fabMenu}>
                    <TouchableOpacity
                        style={STYLES.fabButton}
                        onPress={() => {
                            onCreatePress(true);
                            setIsOpen(false);
                        }}
                    >
                        <FontAwesome5 name={ICONS.CREATE_FOLDER} size={24} color={COLORS.BACKGROUND}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={STYLES.fabButton}
                        onPress={() => {
                            onCreatePress(false);
                            setIsOpen(false);
                        }}
                    >
                        <FontAwesome5 name={ICONS.CREATE_FILE} size={24} color={COLORS.BACKGROUND}/>
                    </TouchableOpacity>
                </View>
            )}
            <TouchableOpacity style={STYLES.fab} onPress={() => setIsOpen(!isOpen)}>
                <FontAwesome5
                    name={isOpen ? ICONS.CLOSE : ICONS.CREATE}
                    size={24}
                    color={COLORS.BACKGROUND}
                />
            </TouchableOpacity>
        </View>
    );
};

export default FloatingActionButton;