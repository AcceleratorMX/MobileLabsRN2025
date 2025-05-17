export const tasks = [
    {
        id: '1',
        title: 'Зробити 10 тапів',
        description: 'Натисніть на логотип 10 разів',
        completed: false,
        type: 'tap',
        target: 10,
        progress: 0
    },
    {
        id: '2',
        title: 'Зробити подвійний тап 5 разів',
        description: 'Два рази швидко настисніть на логотип, для виконання подвійного тапу',
        completed: false,
        type: 'doubleTap',
        target: 5,
        progress: 0
    },
    {
        id: '3',
        title: 'Утримувати логотип 3 секунди',
        description: 'Натисніть і утримуйте деякий час',
        completed: false,
        type: 'longPress',
        target: 1,
        progress: 0
    },
    {
        id: '4',
        title: 'Перетягнути логотип',
        description: 'Утримуючи палець на логотипі, перемістіть його по екрану',
        completed: false,
        type: 'pan',
        target: 1,
        progress: 0
    },
    {
        id: '5',
        title: 'Зробити свайп вправо',
        description: 'Утримуючи палець на логотипі, перемістіть вправо',
        completed: false,
        type: 'flingRight',
        target: 1,
        progress: 0
    },
    {
        id: '6',
        title: 'Зробити свайп вліво',
        description: 'Утримуючи палець на логотипі, перемістіть вліво',
        completed: false,
        type: 'flingLeft',
        target: 1,
        progress: 0
    },
    {
        id: '7',
        title: 'Змінити розмір логотипу',
        description: 'Використайте жест, щоб розрягнути логотип для збільшення або навпаки',
        completed: false,
        type: 'pinch',
        target: 1,
        progress: 0
    },
    {
        id: '8',
        title: 'Отримати 100 очок',
        description: 'Набрати загалом 100 очок у лічильнику',
        completed: false,
        type: 'score',
        target: 100,
        progress: 0
    }
];