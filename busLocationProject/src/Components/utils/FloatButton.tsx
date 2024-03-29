import React, {Component} from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
// @ts-ignore
import {Icon} from "react-native-vector-icons/dist";
import Ionicons from "react-native-vector-icons/Ionicons";
/*
* icon
* https://github.com/oblador/react-native-vector-icons#android
* */

interface FloatButtonProps {
    title?: string,
    buttonColor?: string,
    titleColor?: string,
    onPress() : Promise<void>

}

export const FloatButton = (props: FloatButtonProps) => {

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.button]}
        >
            <Ionicons name='md-reload' size={30} color='#fff' />
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 0,
        right: 15,
        backgroundColor: '#0C9',
        borderRadius: 100,
    },
    title: {
        fontSize: 15,
    },
});