import React, { Component, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import CustomizeSteps from "../../components/CustomizeSteps";
import { useEffect } from "react/cjs/react.production.min";

const Stack = createStackNavigator();

export default class Resume extends Component {
    constructor({ navigation }) {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.header}> Selecione as imagens </Text>
                    <Text style={styles.header2}> Selecione images de seu dispositivo ou tire uma foto agora mesmo </Text>
                    <View style={styles.selecionar}>
                        <TouchableOpacity >
                            <Text style={styles.selecionarText}> Selecionar </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.selecionarText}> Tirar foto </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.selecionar}>
                        <Text style={styles.selecionarText2}> + </Text>
                        <Text style={styles.selecionarText2}> + </Text>
                        <Text style={styles.selecionarText2}> + </Text>
                    </View>
                    <View style={styles.selecionar}>
                        <Text style={styles.selecionarText2}> + </Text>
                        <Text style={styles.selecionarText2}> + </Text>
                        <Text style={styles.selecionarText2}> + </Text>
                    </View>
                </ScrollView>
                <View>

                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        paddingLeft: 7,
        borderWidth: 1,
        borderRadius: 7
    },

    header: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'bold'
    },

    header2: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'bold',
        marginTop: 30
    },

    selecionar: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-evenly'
    },

    selecionarText: {
        backgroundColor: 'lightgray',
        height: 50,
        width: 100,
        textAlign: 'center',
        paddingTop: 13,
        fontSize: 17,
        borderRadius: 12
    },

    selecionarText2: {
        backgroundColor: 'lightgray',
        height: 100,
        width: 100,
        textAlign: 'center',
        paddingTop: 35,
        fontSize: 17,
        borderRadius: 12,
    },

    containerSteps: {
        flex: 1
    }
});