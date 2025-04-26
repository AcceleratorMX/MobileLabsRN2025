import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TaskItem = ({task}) => {
    const progressText = task.target > 1
        ? `${task.progress}/${task.target}`
        : task.completed ? 'Виконано' : 'Не виконано';

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{task.title}</Text>
                <Text style={[
                    styles.status,
                    task.completed ? styles.completed : styles.incomplete
                ]}>
                    {progressText}
                </Text>
            </View>
            <Text style={styles.description}>{task.description}</Text>
            {task.target > 1 && task.progress > 0 && (
                <View style={styles.progressBarContainer}>
                    <View
                        style={[
                            styles.progressBar,
                            {width: `${Math.min(100, (task.progress / task.target) * 100)}%`}
                        ]}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    completed: {
        backgroundColor: '#e6f7e6',
        color: '#2e7d32',
    },
    incomplete: {
        backgroundColor: '#ffebee',
        color: '#c62828',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    progressBarContainer: {
        height: 4,
        backgroundColor: '#e0e0e0',
        borderRadius: 2,
        overflow: 'hidden',
        marginTop: 8,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#4caf50',
    },
});

export default TaskItem;