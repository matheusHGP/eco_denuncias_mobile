import React, { Component, useState } from "react";
import { StyleSheet, View, TextInput, Text, ScrollView } from "react-native";
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
                    <View style={styles.form}>
                        <Text>Nome da Rua </Text>
                        <TextInput style={styles.input} value={'Digite o nome da rua'} />
                    </View>
                    <View style={styles.form}>
                        <Text>Número</Text>
                        <TextInput style={styles.input} value={'Digite o número'} />
                    </View>
                    <View style={styles.form}>
                        <Text>Bairro</Text>
                        <TextInput style={styles.input} value={'Digite o bairro'} />
                    </View>
                    <View style={styles.form}>
                        <Text>Ponto de Referência</Text>
                        <TextInput style={styles.input} value={'Digite um ponto de Refereência'} />
                    </View>
                    <View style={styles.form}>
                        <Text>Quando?</Text>
                        <TextInput style={styles.input} value={'Digite a data e hora'} />
                    </View>
                    <View style={styles.form}>
                        <Text>Informe o Ocorrido</Text>
                        <TextInput style={styles.inputBig} value={'Ocorrêencia'} />
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
    inputBig: {
        height: 80,
        paddingLeft: 7,
        borderWidth: 1,
        borderRadius: 7
    },
    form: {
        margin: 12,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    },
    containerSteps: {
        flex: 1
    }
});