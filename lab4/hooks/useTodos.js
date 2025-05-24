import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveTodos} from '../utils/storageUtils';
import {cancelNotification, scheduleNotification} from '../utils/notificationUtils';

export const useTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const stored = await AsyncStorage.getItem('todos');
                if (stored) {
                    const parsed = JSON.parse(stored);
                    parsed.sort((a, b) => a.date - b.date);
                    setTodos(parsed);
                }
            } catch (err) {
                console.error('Failed to load todos:', err);
            }
        };

        loadTodos();
    }, []);

    const handleCreateTodo = async (todo) => {
        const todoTime = new Date(todo.date).getTime();

        if (todoTime < Date.now()) {
            console.error('Date is in the past!');
            return;
        }

        const notificationId = await scheduleNotification(todo);

        if (!notificationId) {
            console.error('Failed to schedule notification!');
            return;
        }

        const newTodo = {
            ...todo,
            id: notificationId,
            isCompleted: false,
            notificationId,
        };

        const updatedTodos = [newTodo, ...todos].sort((a, b) => a.date - b.date);
        setTodos(updatedTodos);
        await saveTodos(updatedTodos);
    };

    const handleDeleteTodo = async (id) => {
        const todo = todos.find((t) => t.id === id);
        if (todo?.notificationId) {
            await cancelNotification(todo.notificationId);
        }
        const updatedTodos = todos.filter((t) => t.id !== id);
        setTodos(updatedTodos);
        await saveTodos(updatedTodos);
    };

    const completeTodo = async (id) => {
        const todo = todos.find((t) => t.id === id);
        if (!todo || todo.isCompleted) return;

        if (todo.notificationId) {
            await cancelNotification(todo.notificationId);
        }

        const updatedTodos = todos.map((t) =>
            t.id === id
                ? {...t, isCompleted: true, notificationId: null}
                : t
        );

        setTodos(updatedTodos);
        await saveTodos(updatedTodos);
    };

    return {
        todos,
        handleCreateTodo,
        handleDeleteTodo,
        completeTodo,
    };
};