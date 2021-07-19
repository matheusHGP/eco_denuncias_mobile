import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'
// import SyncStorage from 'sync-storage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            token: '',
            isSigned: false,
            data: {
                email: '',
                password: ''
            }
        }
    }

    onChange = (label, value) => {
        console.log(this.state)
        const stateData = { ...this.state.data }
        stateData[label] = value

        this.setState({ data: stateData })
    }

    login = async () => {
        try {
            const data = { ...this.state.data }
            var config = {
                method: 'post',
                url: 'http://10.0.2.2:6000/auth',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIiLCJpYXQiOjE2MjY2Mzc5ODIsImV4cCI6MTYyNjcyNDM4Miwic3ViIjoiNGY5NmU0ODUtMTJmZC00MGFkLTk3OWItNzMyMTc5M2QzNWVjIn0.af69syebEXsOtYWu_tmxxoO-MvBW8IDgu-hqghp_JfQ',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data)
            };
            const response = await axios(config)
            this.props.callback(response.data.token)
            // await SyncStorage.set('token_key', response.data.token)
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Bem Vindo(a) !</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.containerForm}>
                        <View>
                            <Text style={styles.bodyText}>
                                Bem vindo(a) ao nosso aplicativo de denuncias!
                                Para fazer uma denuncia, basta fazer o login
                            </Text>
                        </View>
                        <View>
                            <View style={styles.containerInput}>
                                <Text>Email</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Digite seu email"}
                                    textContentType="emailAddress"
                                    keyboardType="email-address"
                                    value={this.state.data.email}
                                    onChangeText={(value) => this.onChange('email', value)}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.containerInput}>
                                <Text>Senha</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Digite sua senha"}
                                    textContentType="newPassword"
                                    secureTextEntry={true}
                                    value={this.state.data.password}
                                    onChangeText={(value) => this.onChange('password', value)}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.containerForgot}>
                                <Text style={styles.textForgot}>Esqueceu a senha ?</Text>
                            </View>
                            <View style={styles.containerInput}>
                                <TouchableOpacity onPress={this.login} style={styles.buttonForm}>
                                    <Text style={styles.textButtonForm}>Entrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        display: 'flex',
        justifyContent: 'space-evenly'
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