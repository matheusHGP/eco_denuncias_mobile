import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Tela1 from '../views/new/Tela1'
import Tela2 from '../views/new/Tela2'
import Tela3 from '../views/new/Tela3'


export default class CustomizeSteps extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ProgressSteps activeStep={0}>
                    <ProgressStep
                        label={"tela 1"}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior"
                        nextBtnStyle={styles.bntStyle}
                        nextBtnTextStyle={styles.textStyle}
                    >
                        <Tela1 />
                    </ProgressStep>

                    <ProgressStep
                        label={"tela 2"}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior"
                        nextBtnStyle={styles.bntStyle}
                        nextBtnTextStyle={styles.textStyle}
                        previousBtnStyle={styles.prevBntStyle}
                        previousBtnTextStyle={styles.textStyle}
                    >
                        <Tela2 />
                    </ProgressStep>

                    <ProgressStep
                        label={"tela 3"}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior"
                        nextBtnStyle={styles.bntStyle}
                        nextBtnTextStyle={styles.textStyle}
                        previousBtnStyle={styles.prevBntStyle}
                        previousBtnTextStyle={styles.textStyle}
                    >
                        <Tela3 />
                    </ProgressStep>

                    <ProgressStep
                        label={"tela 4"}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior"
                        finishBtnText="Finalizar"
                        nextBtnStyle={styles.bntStyle}
                        nextBtnTextStyle={styles.textStyle}
                        previousBtnStyle={styles.prevBntStyle}
                        previousBtnTextStyle={styles.textStyle}

                    >
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
    },
    bntStyle: {
        textAlign: 'center',
        padding: 8,
        backgroundColor: '#000C66',
        borderRadius: 5,
    },
    textStyle: {
        color: 'white'
    },
    prevBntStyle: {
        textAlign: 'center',
        padding: 8,
        backgroundColor: '#8c8888',
        borderRadius: 5,
    },
})