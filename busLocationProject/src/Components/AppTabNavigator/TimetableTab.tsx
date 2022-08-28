import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TimetableView} from "../View/TimetableView";

export default class TimetableTab extends Component {
    static navigationOptions = {
        // tabBarIcon: ({ tintColor }) => (
        //     <Ionicons name='time' style={{ color: tintColor, fontSize: 30}} />
        // )
    }
    render() {
        return (
            <View style={style.container}>
                <TimetableView />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});