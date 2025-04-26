import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import Character from '../components/Character';
import ScoreCounter from '../components/ScoreCounter';
import {tasks} from '../utils/tasks';

const GameScreen = ({navigation}) => {
    const [score, setScore] = useState(0);
    const [tasksProgress, setTasksProgress] = useState(tasks);

    const updateTaskProgress = (taskType, increment = 1, currentScore = null) => {
        setTasksProgress(currentTasks => {
            return currentTasks.map(task => {
                if (task.type === taskType && !task.completed) {
                    const newProgress = task.progress + increment;
                    const completed = newProgress >= task.target;

                    if (completed) {
                        Alert.alert('Завдання виконано!', `Ви виконали завдання "${task.title}"!`);
                    }

                    return {
                        ...task,
                        progress: newProgress,
                        completed,
                    };
                }

                if (task.type === 'score' && taskType === 'score') {
                    const scoreToUse = currentScore ?? score + increment;
                    const completed = scoreToUse >= task.target;

                    if (completed && !task.completed) {
                        Alert.alert('Завдання виконано!', `Ви виконали завдання "${task.title}"!`);
                    }

                    return {
                        ...task,
                        progress: scoreToUse,
                        completed,
                    };
                }

                return task;
            });
        });
    };

    const handleTap = () => {
        setScore(prev => {
            const newScore = prev + 1;
            updateTaskProgress('tap');
            updateTaskProgress('score', 1, newScore);
            return newScore;
        });
    };

    const handleDoubleTap = () => {
        setScore(prev => prev + 2);
        updateTaskProgress('doubleTap');
        updateTaskProgress('score', 2);
    };

    const handleLongPress = () => {
        setScore(prev => prev + 5);
        updateTaskProgress('longPress');
        updateTaskProgress('score', 5);
    };

    const handlePan = () => {
        updateTaskProgress('pan');
    };

    const handleFlingLeft = () => {
        updateTaskProgress('flingLeft');
    };

    const handleFlingRight = () => {
        updateTaskProgress('flingRight');
    };

    const handlePinch = () => {
        updateTaskProgress('pinch');
    };

    useEffect(() => {
        navigation.setParams({tasks: tasksProgress});
    }, [tasksProgress]);

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <ScoreCounter score={score}/>

            <Text style={styles.instructionText}>
                Натискайте, свайпайте та масштабуйте об'єкт, щоб набрати очки!
            </Text>

            <View style={styles.charContainer}>
                <Character
                    onTap={handleTap}
                    onDoubleTap={handleDoubleTap}
                    onLongPress={handleLongPress}
                    onPan={handlePan}
                    onFlingLeft={handleFlingLeft}
                    onFlingRight={handleFlingRight}
                    onPinch={handlePinch}
                />
            </View>

            <TouchableOpacity
                style={styles.tasksButton}
                onPress={() => navigation.navigate('Tasks', {tasks: tasksProgress})}
            >
                <Text style={styles.tasksButtonText}>Перейти до завдань</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 20,
        paddingHorizontal: 16,
    },
    instructionText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },
    charContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tasksButton: {
        backgroundColor: '#3498db',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    tasksButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default GameScreen;