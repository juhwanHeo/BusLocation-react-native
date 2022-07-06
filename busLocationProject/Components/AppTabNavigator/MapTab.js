import React, { Component } from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Icon} from 'native-base'

export default class MapTab extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>MapTab</Text>
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