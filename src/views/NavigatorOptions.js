import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import New from './New'
import NewOptions from "./NewOptions";

const Stack = createStackNavigator();

const NavigatorOptions = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="teste">
            <Stack.Screen name="NewOptions" component={NewOptions} />
            <Stack.Screen name="New" component={New} />
        </Stack.Navigator>
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

export default NavigatorOptions;