import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import TipoDenuncia from '../views/new/TipoDenuncia'
import Location from '../views/new/Location'
import Photos from '../views/new/Photos'
import Infrator from '../views/new/Infrator'
import AdInformation from '../views/new/AdInformation'
import Final from '../views/new/Final'
import axios from 'axios'
import CustomModalSuccess from '../components/CustomModalSuccess'

export default class CustomizeSteps extends Component {
    constructor() {
        super()
        this.state = {
            location: {
                street: '',
                number: '',
                neighborhood: '',
                point_refer: '',
                date_occurred: '',
                other_observations: ''
            },
            photos: [],
            offender: {
                photos: [],
                offender_details: ''
            },
            modalOpened: false
        }
    }

    onModalClose = () => {
        this.setState({modalOpened: false})
    }

    onChange(stateValue, label, value) {
        const newState = { ...this.state }
        newState[stateValue][label] = value
        this.setState({ ...this.state })
        console.log(this.state)
    }

    onChangePhotos = (photos) => {
        console.log(photos)
        const newState = { ...this.state }
        newState.photos = photos

        this.setState({ ...newState })
    }

    saveOccurrence = async () => {
        let photos = [...this.state.photos, ...this.state.offender.photos]

        const location = { ...this.state.location, number: Number(this.state.location.number), date_occurred: '2021/10/10' }
        const data = {
            problem_id: this.props.problem.id,
            ...location,
            offender_details: this.state.offender.offender_details,
            photos: photos
        }

        var config = {
            method: 'post',
            url: 'http://10.0.2.2:8080/occurrences',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhldXNAZ21haWwuY29tIiwiaWF0IjoxNjI2NzMxMTc0LCJleHAiOjE2MjY4MTc1NzQsInN1YiI6ImFhYWFiMzdkLTQ5ZjItNGFiMi1iNDg1LTdjODllYzlhYzNiOCJ9.31fhtxhpJbxMLiGWhSG8bkq5_j1ZxuYvH7LAqemBKyQ',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        };
        try {
            const occurrence = await axios(config)
            this.setState({occurrence: occurrence.data, modalOpened: true})
            return occurrence.data
        } catch (error) {
            console.log('falha')
            if (error.response) {
                console.log(error.response.data)
            } else {
                console.log(error.message)
            }
        }
    }

    render() {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <ProgressSteps activeStep={0}>
                        <ProgressStep
                            label={"tela 1"}
                            nextBtnText="Pr??ximo"
                            previousBtnText="Anterior"
                            nextBtnStyle={styles.bntStyle}
                            nextBtnTextStyle={styles.textStyle}
                        >
                            <TipoDenuncia
                                problem={this.props.problem}
                            />
                        </ProgressStep>

                        <ProgressStep
                            label={"tela 2"}
                            nextBtnText="Pr??ximo"
                            previousBtnText="Anterior"
                            nextBtnStyle={styles.bntStyle}
                            nextBtnTextStyle={styles.textStyle}
                            previousBtnStyle={styles.prevBntStyle}
                            previousBtnTextStyle={styles.textStyle}
                        >
                            <Location
                                state={{ ...this.state }}
                                onChange={(label, value) => this.onChange('location', label, value)}
                            />
                        </ProgressStep>

                        <ProgressStep
                            label={"tela 3"}
                            nextBtnText="Pr??ximo"
                            previousBtnText="Anterior"
                            nextBtnStyle={styles.bntStyle}
                            nextBtnTextStyle={styles.textStyle}
                            previousBtnStyle={styles.prevBntStyle}
                            previousBtnTextStyle={styles.textStyle}
                        >
                            <Photos state={{ ...this.state }} onChangePhotos={this.onChangePhotos} />
                        </ProgressStep>

                        <ProgressStep
                            label={"tela 4"}
                            nextBtnText="Pr??ximo"
                            previousBtnText="Anterior"
                            finishBtnText="Finalizar"
                            nextBtnStyle={styles.bntStyle}
                            nextBtnTextStyle={styles.textStyle}
                            previousBtnStyle={styles.prevBntStyle}
                            previousBtnTextStyle={styles.textStyle}
                            onSubmit={() => this.saveOccurrence()}

                        >
                            <Infrator
                                state={{ ...this.state }}
                                onChange={(label, value) => this.onChange('offender', label, value)}
                            />
                        </ProgressStep>

                        {/* <ProgressStep
                        label={"tela 5"}
                        nextBtnText="Pr??ximo"
                        previousBtnText="Anterior"
                        finishBtnText="Finalizar"
                        nextBtnStyle={styles.bntStyle}
                        nextBtnTextStyle={styles.textStyle}
                        previousBtnStyle={styles.prevBntStyle}
                        previousBtnTextStyle={styles.textStyle}
                        
                        >
                        <AdInformation />
                    </ProgressStep> */}
                        {/* 
                    <ProgressStep
                    label={"tela 5"}
                    nextBtnText="Pr??ximo"
                        previousBtnText="Anterior"
                        finishBtnText="Finalizar"
                        nextBtnStyle={styles.bntStyle}
                        nextBtnTextStyle={styles.textStyle}
                        previousBtnStyle={styles.prevBntStyle}
                        previousBtnTextStyle={styles.textStyle}
                        
                        >
                        <Final state={this.props.state} onChange={(label, value) => this.onChange('photos')}/>
                    </ProgressStep> */}
                    </ProgressSteps>
                </View>
                {this.state.modalOpened &&
                    <CustomModalSuccess
                        occurrence={this.state.occurrence}
                        onClose={this.onModalClose}
                    />}
            </>
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
        marginBottom: -20
    },
    textStyle: {
        color: 'white'
    },
    prevBntStyle: {
        textAlign: 'center',
        padding: 8,
        backgroundColor: '#8c8888',
        borderRadius: 5,
        marginBottom: -20
    },
})