import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '../constants';

export const scheduleNotification = async (todo) => {
    const url = 'https://api.onesignal.com/notifications?c=push';
    const externalId = await AsyncStorage.getItem('externalId');
    const sendAfter = new Date(todo.date).toISOString();

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${API.API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                app_id: API.APP_ID,
                headings: {en: todo.title},
                contents: {en: todo.description},
                send_after: sendAfter,
                include_external_user_ids: [externalId],
            }),
        });

        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            return null;
        }

        const result = await response.json();
        return result.id;
    } catch (error) {
        console.error('Error sending notification:', error);
        return null;
    }
};

export const cancelNotification = async (notificationId) => {
    const url = `https://api.onesignal.com/notifications/${notificationId}?app_id=${API.APP_ID}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${API.API_KEY}`,
            },
        });

        if (response.status === 400) {
            return;
        }

        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            return;
        }

        const result = await response.json();
        console.log('Notification have been canceled:', result);
    } catch (error) {
        console.error(error);
    }
};