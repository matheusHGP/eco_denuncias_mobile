import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import New from './new/New'
import NewOptions from "./NewOptions";

const Stack = createStackNavigator();

const NavigatorOptions = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="NewOptions" component={NewOptions} />
            <Stack.Screen name="Nova Denúncia" component={New} />
        </Stack.Navigator>
    )
}

export default NavigatorOptions;