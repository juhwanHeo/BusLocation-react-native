/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * naver map
 * https://yannichoongs.tistory.com/162
 * @format
 * @flow strict-local
 */

import React from 'react';
import type, {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import MainScreen from './Components/Screens/MainScreen'


const App: () => Node = () => {
    return (
        <MainScreen/>
    );
};

export default App;
