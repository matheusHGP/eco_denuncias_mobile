import React, { Component, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import CustomizeSteps from "../../components/CustomizeSteps";
import { useEffect } from "react/cjs/react.production.min";

const Stack = createStackNavigator();

export default class TipoDenuncia extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.header}>{this.props.problem.description}</Text>
                <Text style={styles.body}>{this.props.problem.explication}</Text>
                <View
                    style={styles.footer}
                >
                    <Image style={styles.image} source={require('../../images/descarteResiduos.jpg')} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 23,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    body: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700'
    },
    footer: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20
    },
    image: {
        width: 300,
        height: 300,
    },
});