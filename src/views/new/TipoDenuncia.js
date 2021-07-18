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
                    <Text style={styles.hearder}> O tipo de denuncia selecionada:  </Text>
                    <Text style={styles.hearder}> Descarte irregular de resíduos </Text>
                    <Text style={styles.hearder2}> Explicação do problema </Text>
                    <Text style={styles.TextImg}>
                        <Image source={require('../../images/descarteResiduos.jpg')} style={styles.img} />
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

    hearder2: {
        textAlign: 'center',
        fontSize: 23,
        marginTop: 30
    },

    TextImg: {
        textAlign: 'center',
        marginTop: -110,
        marginBottom: 30
    }, 

    img: {
        width: 300,
        height: 300,
        alignItems: 'center'
    },
});