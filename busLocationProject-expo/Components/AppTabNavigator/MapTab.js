import React, { Component } from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import MapView from "../View/MapView";

export default class MapTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name='map' style={{ color: tintColor, fontSize: 30}} />
        )
    }

    render() {
        return (
            <View style={style.container}>
                <MapView/>
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