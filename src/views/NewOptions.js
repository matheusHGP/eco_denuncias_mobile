import React from "react";
import { StyleSheet, View, ScrollView, Text, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Card from "../components/Card";
import New from './new/New'

const Stack = createStackNavigator();

const NewOptions = ({ navigation }) => {
    return (
        [
            'Descarte irregular de resíduos',
            'Desmatamento',
            'loteamento irregular',
            'Uso indevido de área pública',
            'Maus tratos contra animais',
            'Abandono de animas'].map((title, index) => {
                return (
                    <Card navigation={navigation} key={index} title={title}></Card>
                )
            })
    )
}

const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: '#446DAB',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    viewIcon: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: 'center'
    },
    icon: {
        marginTop: 22
    },
    textIcon: {
        marginTop: 0,
        color: 'white',
        fontWeight: '100'
    }
});

export default NewOptions;