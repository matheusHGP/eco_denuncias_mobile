import React, { Component, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
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
                    <Text style={styles.header}> Você sabe quem é o possível infrator ? </Text>
                    <Text style={styles.header2}>  Para que essa denúncia seja bem sucedida,
                        é muito importante que você nos ajude a
                        identificar o possível infrator. Qualquer dado
                        que você tenha conhecimento pode ser útil </Text>
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

                    <Text style={styles.infomation}>
                        Descreva aqui com o máximo
                        de informações que você tiver
                    </Text>
                    <TextInput style={styles.input} placeholder='Digite a informação' />
                </ScrollView>
                <View>

                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 100,
        margin: 30,
        textAlign: 'center',
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
        fontSize: 16,
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
    },

    infomation:{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        fontSize: 17,
        marginTop: 15
    },
});