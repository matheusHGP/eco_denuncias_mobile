import React, { Component, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
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
                    <Text style={styles.hearder}> Adicione observações nas imagens </Text>
                    <TouchableOpacity >
                        <Text style={styles.imgs}> Imagem 1</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.input} placeholder='Descreva aqui uma obs para nos auxiliar...' />
                    <TouchableOpacity >
                        <Text style={styles.imgs2}> Imagem 2</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.input} placeholder='Descreva aqui uma obs para nos auxiliar...' />
                </ScrollView>
                <View>

                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    hearder: {
        textAlign: 'center',
        fontSize: 23
    },

    imgs: {
        textAlign: 'center',
        margin: 60,
        backgroundColor: 'lightgray',
        width: 300,
        height: 100,
        paddingTop: 30,
        fontSize: 20
    },

    imgs2: {
        textAlign: 'center',
        margin: 60,
        backgroundColor: 'lightgray',
        width: 300,
        height: 100,
        paddingTop: 30,
        fontSize: 20,
        marginTop: -5
    },

    input: {
        height: 40,
        paddingLeft: 7,
        borderWidth: 1,
        borderRadius: 7,
        margin: 30,
        marginTop: -20
    },
});