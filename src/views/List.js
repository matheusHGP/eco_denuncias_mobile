import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { DataTable } from 'react-native-paper';
import axios from 'axios'
// import SyncStorage from 'sync-storage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default class List extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Denúncias</Text>
                </View>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Codigo</DataTable.Title>
                        <DataTable.Title>Data</DataTable.Title>
                        <DataTable.Title>Status</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell>12345/2021</DataTable.Cell>
                        <DataTable.Cell>10/10/2021</DataTable.Cell>
                        <DataTable.Cell>Pendente</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>12345/2021</DataTable.Cell>
                        <DataTable.Cell>10/10/2021</DataTable.Cell>
                        <DataTable.Cell>Pendente</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>12345/2021</DataTable.Cell>
                        <DataTable.Cell>10/10/2021</DataTable.Cell>
                        <DataTable.Cell>Pendente</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>12345/2021</DataTable.Cell>
                        <DataTable.Cell>10/10/2021</DataTable.Cell>
                        <DataTable.Cell>Pendente</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>12345/2021</DataTable.Cell>
                        <DataTable.Cell>10/10/2021</DataTable.Cell>
                        <DataTable.Cell>Pendente</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
                <View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        display: 'flex',
        justifyContent: 'space-between'
    },
    containerForm: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000C66'
    },
    bodyText: {
        fontSize: 16,
        color: 'black',
        // margin: 5,
        textAlign: 'center'
    },
    input: {
        height: 40,
        paddingLeft: 7,
        borderWidth: 1,
        borderRadius: 7
    },
    containerInput: {
        margin: 10
    },
    buttonForm: {
        textAlign: 'center',
        padding: 8,
        backgroundColor: '#000C66',
        borderRadius: 5,
    },
    textButtonForm: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerForgot: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    textForgot: {
        color: 'blue'
    }
});