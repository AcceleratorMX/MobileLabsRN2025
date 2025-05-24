import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTodos = async (updatedTodos) => {
    await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
};