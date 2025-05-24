import React from 'react';
import {Text, View} from 'react-native';
import {STYLES} from '../styles';
import TodoInput from './create/TodoInput';
import DateSelector from './create/DateSelector';
import SubmitButton from './create/SubmitButton';
import {useTodoForm} from '../hooks/useCreateTodo';

const CreateTodo = ({onCreate}) => {
    const {
        title,
        setTitle,
        description,
        setDescription,
        date,
        isDatePickerVisible,
        setDatePickerVisibility,
        handleSubmit,
        handleConfirm,
        handleCancel,
    } = useTodoForm(onCreate);

    return (
        <View style={STYLES.createContainer}>
            <Text style={STYLES.sectionTitle}>Нове завдання</Text>
            <TodoInput
                value={title}
                onChangeText={setTitle}
                placeholder="Назва"
            />
            <TodoInput
                value={description}
                onChangeText={setDescription}
                placeholder="Опис"
                isMultiline
            />
            <DateSelector
                date={date}
                isDatePickerVisible={isDatePickerVisible}
                setDatePickerVisibility={setDatePickerVisibility}
                handleConfirm={handleConfirm}
                handleCancel={handleCancel}
            />
            <SubmitButton onPress={handleSubmit}/>
        </View>
    );
};

export default CreateTodo;