import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {Icon} from 'native-base';
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeTab from "./AppTabNavigator/HomeTab";
import MapTab from "./AppTabNavigator/MapTab";
import TimetableTab from "./AppTabNavigator/TimetableTab";


const AppTabNavigator = createBottomTabNavigator({
    HomeTab: {screen: HomeTab},
    MapTab: {screen: MapTab},
    TimetableTab: {screen: TimetableTab}
});

const AppTabContainer = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
    static navigationOptions = {
        // headerLeft: <Icon name='ios-camera' style={{paddingLeft: 10}} />,
        title: 'Maps',
        // headerRight: <Icon name='ios-send' style={{paddingRight: 10}} />
    };

    render() {
        return (
            // <View style={styles.container}>
            //     <Text>MainScreen22</Text>
            // </View>
            <AppTabContainer/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});