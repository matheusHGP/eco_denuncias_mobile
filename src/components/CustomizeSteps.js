import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';


export default class CustomizeSteps extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ProgressSteps activeStep={this.props.activeStep}>
                    <ProgressStep label={"tela 1"}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>tela 1</Text>
                        </View>
                    </ProgressStep>

                    <ProgressStep label={"tela 2"}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>tela 2</Text>
                        </View>
                    </ProgressStep>

                    <ProgressStep label={"tela 3"}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>tela 3</Text>
                        </View>
                    </ProgressStep>

                    <ProgressStep label={"tela 4"}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>tela 4</Text>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5
    },
    form: {
        margin: 12,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    },
    container: {
        flex: 1
    }
});