import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {TextInput} from "react-native-web";

export default class MyLayout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.output}>0</View>
                <TouchableOpacity style={styles.buttonNormal}>AC</TouchableOpacity>
                <TouchableOpacity style={styles.buttonNotNormal}> </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonNormal,styles.buttonOperation]}>/</TouchableOpacity>

                <TouchableOpacity style={styles.buttonNormal}>7</TouchableOpacity>
                <TouchableOpacity style={styles.buttonNormal}>8</TouchableOpacity>
                <TouchableOpacity style={styles.buttonNormal}>9</TouchableOpacity>
                <TouchableOpacity style={[styles.buttonNormal,styles.buttonOperation]}>X</TouchableOpacity>

                <TouchableOpacity style={styles.buttonNormal}>4</TouchableOpacity>
                <TouchableOpacity style={styles.buttonNormal}>5</TouchableOpacity>
                <TouchableOpacity style={styles.buttonNormal}>6</TouchableOpacity>
                <TouchableOpacity style={[styles.buttonNormal,styles.buttonOperation]}>-</TouchableOpacity>

                <TouchableOpacity style={styles.buttonNormal}>1</TouchableOpacity>
                <TouchableOpacity style={styles.buttonNormal}>2</TouchableOpacity>
                <TouchableOpacity style={styles.buttonNormal}>3</TouchableOpacity>
                <TouchableOpacity style={[styles.buttonNormal,styles.buttonOperation]}>+</TouchableOpacity>

                <TouchableOpacity style={styles.buttonNotNormal}>0</TouchableOpacity>
                <TouchableOpacity style={styles.buttonNormal}>,</TouchableOpacity>

                <TouchableOpacity style={[styles.buttonNormal,styles.buttonOperation]}>=</TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#505050",
        color:"white",
        width: 400,
        height: 650,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'flex-end',
        fontFamily: 'Arial',
        fontSize: 42
    },
    buttonNormal:{
        width: 100,
        height: 100,
        borderTopWidth: 2,
        borderRightWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:"#1C1C1C"
    },
    buttonNotNormal:{
        width: 200,
        height: 100,
        borderTopWidth: 2,
        borderRightWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:"#1C1C1C"
    },
    buttonOperation:{
        backgroundColor: "#FF9500",
        borderTopWidth: 2,
        borderRightWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:"#1C1C1C"
    },
    output:{
        color:"white",
        width: 400,
        height: 150,
        fontFamily: 'Arial',
        fontSize: 94,
        alignItems:"flex-end",
        justifyContent:"center",
        padding: 5.5,
    }
});
