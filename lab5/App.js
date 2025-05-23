import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FileBrowser from './screens/FileBrowser';
import FileEditor from './screens/FileEditor';
import {fileSystem} from './utils/fileSystem';

const Stack = createStackNavigator();

const App = () => {
    useEffect(() => {
        fileSystem.init();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="FileBrowser" component={FileBrowser}/>
                <Stack.Screen name="FileEditor" component={FileEditor}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;