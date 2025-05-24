import {useEffect, useState} from 'react';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {v4 as uuidv4} from 'uuid';
import {API} from '../constants';

export const useOneSignal = () => {
    const [externalId, setExternalId] = useState(null);

    useEffect(() => {
        const initializeExternalId = async () => {
            try {
                let storedExternalId = await AsyncStorage.getItem('externalId');
                if (!storedExternalId) {
                    storedExternalId = uuidv4();
                    await AsyncStorage.setItem('externalId', storedExternalId);
                }
                setExternalId(storedExternalId);
            } catch (error) {
                console.error('Error initializing external ID:', error);
            }
        };

        initializeExternalId();
    }, []);

    useEffect(() => {
        if (!externalId) return;

        OneSignal.Debug.setLogLevel(LogLevel.Verbose);
        OneSignal.initialize(API.APP_ID);
        OneSignal.Notifications.requestPermission(true);

        OneSignal.Notifications.addEventListener('foregroundWillDisplay', (event) => {
            console.log('Notification received in foreground:', event.notification);
            event.preventDefault();
            event.notification.display();
        });

        OneSignal.Notifications.addEventListener('click', (event) => {
            console.log('Notification clicked:', event.notification.title);
        });

        OneSignal.login(externalId);
        OneSignal.User.pushSubscription.optIn();
    }, [externalId]);

    return {externalId};
};