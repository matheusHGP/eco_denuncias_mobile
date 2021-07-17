import React from "react";
import { StyleSheet, View, ScrollView, Text, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Card from "../components/Card";

const Stack = createStackNavigator();

class NewOptions {
    constructor({ navigation }) {

    }
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="new" />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Card title={option}></Card>
                </View>
            </Stack.Navigator>
        )
    }
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