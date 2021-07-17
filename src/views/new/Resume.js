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
                        <Text>Nome</Text>
                        <TextInput style={styles.input} value={'teste'} />
                    </View>
                    <View style={styles.form}>
                        <Text>Sobrenome</Text>
                        <TextInput style={styles.input} value={'teste'} />
                    </View>
                    <View style={styles.form}>
                        <Text>Endereço</Text>
                        <TextInput style={styles.input} value={'teste'} />
                    </View>
                    <View style={styles.form}>
                        <Text>Bairro</Text>
                        <TextInput style={styles.input} value={'teste'} />
                    </View>
                    <View style={styles.form}>
                        <Text>Número</Text>
                        <TextInput style={styles.input} value={'teste'} />
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
        borderWidth: 1,
        borderRadius: 5
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