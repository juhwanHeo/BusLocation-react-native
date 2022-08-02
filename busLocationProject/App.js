/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * naver map
 * https://yannichoongs.tistory.com/162
 *
 * build setting
 * https://velog.io/@ricale/React-Native-%EB%B9%8C%EB%93%9C-%ED%99%98%EA%B2%BD-%EB%B6%84%EB%A6%AC
 *
 * m1 칩 cocoapod 에러
 * https://velog.io/@doka/Dont-forget-to-include-the-Crash-Report-log-file-underDiagnosticReports-directory-in-bug-reports
 * + nmap 에러 ( 해결 안됨 )
 * + https://lightrun.com/answers/quadflask-react-native-naver-map-arm64-m1-mac-ios-simulator-build-failed
 *
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
