import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import TaskItem from '../components/TaskItem';
import {tasks as initialTasks} from '../utils/tasks';

const TasksScreen = ({route}) => {
    const [tasks, setTasks] = useState(route.params?.tasks || initialTasks);

    useEffect(() => {
        if (route.params?.tasks) {
            setTasks(route.params.tasks);
        }
    }, [route.params?.tasks]);

    const completedTasksCount = tasks.filter(task => task.completed).length;

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.summaryContainer}>
                <Text style={styles.summaryText}>
                    Виконано завдань: {completedTasksCount} з {tasks.length}
                </Text>
            </View>
            <FlatList
                data={tasks}
                renderItem={({item}) => <TaskItem task={item}/>}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    summaryContainer: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 8,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 1.41,
    },
    summaryText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    listContainer: {
        paddingVertical: 8,
    },
});

export default TasksScreen;