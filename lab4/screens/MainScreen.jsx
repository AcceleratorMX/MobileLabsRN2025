import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {STYLES} from '../styles';
import {COLORS} from '../constants';
import CreateTodo from '../components/CreateTodo';
import TodoCard from '../components/TodoCard';
import EmptyList from '../components/EmptyList';
import {useTodos} from '../hooks/useTodos';

const MainScreen = () => {
    const {todos, handleCreateTodo, handleDeleteTodo, completeTodo} = useTodos();

    return (
        <View style={STYLES.mainContainer}>
            <View style={STYLES.header}>
                <Text style={STYLES.mainTitle}>
                    <FontAwesome5 name="clipboard-list" size={28} color={COLORS.ACCENT}/> To-Do Reminder
                </Text>
            </View>
            <CreateTodo onCreate={handleCreateTodo}/>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TodoCard
                        todo={item}
                        onDelete={() => handleDeleteTodo(item.id)}
                        onComplete={() => completeTodo(item.id)}
                    />
                )}
                ListEmptyComponent={<EmptyList/>}
                contentContainerStyle={todos.length === 0 && STYLES.emptyList}
            />
        </View>
    );
};

export default MainScreen;