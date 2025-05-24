import React from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {STYLES} from '../styles';
import {COLORS} from '../constants';
import {formatDate} from '../utils/dateUtils';
import {useScaleAnimation} from '../hooks/useScaleAnimation';
import {useConfirmDelete} from '../hooks/useConfirmDelete';
import ConfirmDelete from './modals/ConfirmDelete';

const TodoCard = ({todo, onDelete, onComplete}) => {
    const {scaleValue, handlePressIn, handlePressOut} = useScaleAnimation();
    const {
        isModalVisible,
        handleDeletePress,
        handleConfirmDelete,
        handleCancelDelete,
        modalTitle,
    } = useConfirmDelete(onDelete, todo.title);

    return (
        <>
            <Animated.View style={[STYLES.todoItem, {transform: [{scale: scaleValue}]}]}>
                <TouchableOpacity
                    onPress={onComplete}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    <FontAwesome5
                        name={todo.isCompleted ? 'check-circle' : 'circle'}
                        size={28}
                        color={todo.isCompleted ? COLORS.ACCENT : COLORS.INCOMPLETE}
                    />
                </TouchableOpacity>
                <View style={STYLES.todoInfo}>
                    <Text style={[STYLES.todoTitle, todo.isCompleted && STYLES.completedTitle]}>
                        {todo.title}
                    </Text>
                    {todo.description && (
                        <Text style={[STYLES.todoDescription, todo.isCompleted && STYLES.completedDescription]}>
                            {todo.description}
                        </Text>
                    )}
                    <View style={STYLES.dateContainer}>
                        <FontAwesome5 name="clock" size={12} color={COLORS.DATE}/>
                        <Text style={STYLES.todoDate}>{formatDate(todo.date)}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={STYLES.deleteButton}
                    onPress={handleDeletePress}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    <FontAwesome5 name="trash-alt" size={16} color={COLORS.WHITE_COLOR}/>
                </TouchableOpacity>
            </Animated.View>
            <ConfirmDelete
                visible={isModalVisible}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
                title={modalTitle}
            />
        </>
    );
};

export default TodoCard;