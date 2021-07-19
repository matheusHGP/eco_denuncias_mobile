import React, { Component, useState } from "react";
import { StyleSheet, View, TextInput, Text, ScrollView } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import CustomizeSteps from "../../components/CustomizeSteps";
import { useEffect } from "react/cjs/react.production.min";

const Stack = createStackNavigator();

export default class Location extends Component {
    constructor() {
        super()
        this.state = {
            location: {

            }
        }
    }

    componentDidMount(){
        // console.log(this.props.state.location)
        // this.setState({location: this.props.state.location})
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.form}>
                        <Text>Nome da Rua </Text>
                        <TextInput onChangeText={(value) => this.props.onChange('street', value)} style={styles.input} value={this.props.state.location.street} />
                    </View>
                    <View style={styles.form}>
                        <Text>Número</Text>
                        <TextInput onChangeText={(value) => this.props.onChange('number', value)} style={styles.input} value={this.props.state.location.number} />
                    </View>
                    <View style={styles.form}>
                        <Text>Bairro</Text>
                        <TextInput onChangeText={(value) => this.props.onChange('neighborhood', value)} style={styles.input} value={this.props.state.location.neighborhood} />
                    </View>
                    <View style={styles.form}>
                        <Text>Ponto de Referência</Text>
                        <TextInput onChangeText={(value) => this.props.onChange('point_refer', value)} style={styles.input} value={this.props.state.location.point_refer} />
                    </View>
                    <View style={styles.form}>
                        <Text>Quando?</Text>
                        <TextInput onChangeText={(value) => this.props.onChange('date_occurred', value)} style={styles.input} value={this.props.state.location.date_occurred} />
                    </View>
                    <View style={styles.form}>
                        <Text>Informe o Ocorrido</Text>
                        <TextInput onChangeText={(value) => this.props.onChange('other_observations', value)} style={styles.inputBig} value={this.props.state.location.other_observations} />
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