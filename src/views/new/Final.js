import React, { Component, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
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
                    <Text style={styles.hearder}> Denúncia enviada com sucesso ! </Text>
                    <Text style={styles.hearder}> Número da denúncia: xxx </Text>
                    <Text style={styles.description}>
                        Muito obrigado por colaborar conosco.
                        Você está nos ajudando a tornar a
                        cidade de Franca um lugar melhor !
                    </Text>
                    <Text style={styles.description}>
                        Você pode acompanhar o status das
                        suas denúncias na tela de denúncias.
                    </Text>
                    <Text style={styles.warn}>
                        A falta de informações suficientes ao
                        processamento da ocorrência pode
                        impossibilitar a apuração dos fatos
                    </Text>
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
        fontSize: 23,
        margin: 20
    },

    description: {
        textAlign: 'center',
        fontSize: 20,
        margin: 20,
    },

    warn: {
        textAlign: 'center',
        fontSize: 20,
        margin: 20,
        color: 'red'
    },

});

