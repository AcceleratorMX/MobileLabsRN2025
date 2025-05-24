import {useState} from 'react';
import {Alert} from 'react-native';

export const useTodoForm = (onCreate) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const handleSubmit = () => {
        if (!title.trim()) {
            Alert.alert('Помилка', 'Вкажіть назву завдання.');
            return;
        }

        if (!description.trim()) {
            Alert.alert('Помилка', 'Додайте опис завдання.');
            return;
        }

        if (date.getTime() < Date.now()) {
            Alert.alert('Помилка', 'Дата та час мають бути в майбутньому!');
            return;
        }

        const newTask = {
            title: title.trim(),
            description: description.trim(),
            date: date.getTime(),
            isCompleted: false,
        };

        onCreate(newTask);
        setTitle('');
        setDescription('');
        setDate(new Date());
    };

    const handleConfirm = (selectedDate) => {
        setDatePickerVisibility(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    const handleCancel = () => {
        setDatePickerVisibility(false);
    };

    return {
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
    };
};