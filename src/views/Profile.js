import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'
// import SyncStorage from 'sync-storage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            token: '',
            isSigned: false,
            data: {
                "id": "aaaab37d-49f2-4ab2-b485-7c89ec9ac3b8",
                "name": "Matheus Henrique",
                "email": "matheus@gmail.com",
                "last_name": "Gotardo Pintor",
                "whatsapp": "(16) 999716806",
                "cpf": "48207553888",
                "cep": "14403788",
                "created_at": "2021-07-19T21:42:55.692Z",
                "updated_at": "2021-07-19T21:42:55.692Z"
            },
            token: ''
        }
    }

    // async componentDidMount() {
    //     const token = await SyncStorage.get('TOKEN_KEY')
    //     console.log('storage', token)
    //     this.setState({ token })
    // }

    onChange = (label, value) => {
        const stateData = { ...this.state.data }
        stateData[label] = value

        this.setState({ data: stateData })
    }

    save = async () => {
        try {
            const data = { ...this.state.data }
            var config = {
                method: 'put',
                url: 'http://10.0.2.2:8080/auth',
                headers: {
                    'Authorization': `Bearer ${this.state.token}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data)
            };
            const response = await axios(config)
            this.props.callback(response.data.token)
            alert(response.data.token)
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Perfil</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.containerForm}>
                        <View>
                            <View style={styles.containerInput}>
                                <Text>Nome</Text>
                                <TextInput
                                    style={styles.input}
                                    value={this.state.data.name}
                                    onChangeText={(value) => this.onChange('nome', value)}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.containerInput}>
                                <Text>Sobrenome</Text>
                                <TextInput
                                    style={styles.input}
                                    value={this.state.data.last_name}
                                    onChangeText={(value) => this.onChange('last_name', value)}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.containerInput}>
                                <Text>Email</Text>
                                <TextInput
                                    style={styles.input}
                                    value={this.state.data.email}
                                    onChangeText={(value) => this.onChange('email', value)}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.containerInput}>
                                <Text>Whatsapp</Text>
                                <TextInput
                                    style={styles.input}
                                    value={this.state.data.whatsapp}
                                    onChangeText={(value) => this.onChange('whatsapp', value)}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.containerInput}>
                                <Text>CPF</Text>
                                <TextInput
                                    style={styles.input}
                                    value={this.state.data.cpf}
                                    onChangeText={(value) => this.onChange('cpf', value)}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.containerInput}>
                                <Text>CEP</Text>
                                <TextInput
                                    style={styles.input}
                                    value={this.state.data.cep}
                                    onChangeText={(value) => this.onChange('cep', value)}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.containerInput}>
                                <Text>Senha</Text>
                                <TextInput
                                    style={styles.input}
                                    textContentType="newPassword"
                                    secureTextEntry={true}
                                >
                                </TextInput>
                            </View>
                            <View style={styles.containerInput}>
                                <TouchableOpacity onPress={this.save} style={styles.buttonForm}>
                                    <Text style={styles.textButtonForm}>Salvar</Text>
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