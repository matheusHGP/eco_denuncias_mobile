import React, { Component, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import CustomizeSteps from "../../components/CustomizeSteps";
import { useEffect } from "react/cjs/react.production.min";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const Stack = createStackNavigator();

export default class Infrator extends Component {
    constructor({ navigation }) {
        super()
        this.state = {
            images: []
        }
    }

    setImages = (response) => {
        if (response.didCancel) {
            alert('Operação cancelada')
        } else if (response.error) {
            alert('Ocorreu um erro. Tente novamente')
        } else {
            const images = []
            response.assets.map(image => {
                images.push({ uri: image.uri, hash_image: 'data:image/jpeg;base64,' + image.base64, is_occurrence: false })
            })
            this.props.onChange('photos', [...this.props.state.offender.photos, ...images])
        }
    }

    openAlbum = () => {
        let options = {
            mediaType: 'photo',
            includeBase64: true,
            selectionLimit: 0,
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose Photo from Custom Option'
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchImageLibrary(options, this.setImages)
    }

    removeImage = (index) => {
        const array = [...this.props.state.offender.photos]
        array.splice(index, 1)
        this.props.onChange('photos', [...array])

    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.header}> Você sabe quem é o possível infrator ? </Text>
                <Text style={styles.body}>  Para que essa denúncia seja bem sucedida,
                    é muito importante que você nos ajude a
                    identificar o possível infrator. Qualquer dado
                    que você tenha conhecimento pode ser útil </Text>
                <View style={styles.buttonsOptions}>
                    <TouchableOpacity onPress={() => this.openAlbum()}>
                        <Text style={styles.selecionarText}> Selecionar </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.images}>
                    {this.props.state.offender.photos.map((image, index) => {
                        return (
                            <View style={styles.viewImage}>
                                <Image key={index + 2} source={{ uri: image.hash_image }} style={styles.image} />
                                <Text key={index + 3} style={styles.textRemoveImage} onPress={() => this.removeImage(index)}>Remover</Text>
                            </View>
                        )
                    })}
                </View>

                <Text style={styles.infomation}>
                    Descreva aqui com o máximo
                    de informações que você tiver
                </Text>
                <TextInput 
                style={styles.input}
                 placeholder='Insira informações sobre o(s) infrator(es)' 
                 value={this.props.state.offender.offender_details} 
                 onChangeText={(value) => this.props.onChange('offender_details', value)}
                 />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 100,
        margin: 30,
        textAlign: 'left',
        paddingLeft: 7,
        borderWidth: 1,
        borderRadius: 7
    },
    header: {
        textAlign: 'center',
        fontSize: 23,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    body: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        padding: 10
    },
    buttonsOptions: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center'
    },
    images: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    image: {
        margin: 10,
        backgroundColor: 'lightgray',
        height: 100,
        width: 100,
        textAlign: 'center',
        paddingTop: 35,
        fontSize: 17,
        borderRadius: 12,
    },
    viewImage: {
        textAlign: 'center'
    },
    textRemoveImage: {
        color: 'red',
        textAlign: 'center'
    },
    selecionar: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-evenly'
    },

    selecionarText: {
        backgroundColor: 'lightgray',
        height: 50,
        width: 100,
        textAlign: 'center',
        paddingTop: 13,
        fontSize: 17,
        borderRadius: 12
    },

    selecionarText2: {
        backgroundColor: 'lightgray',
        height: 100,
        width: 100,
        textAlign: 'center',
        paddingTop: 35,
        fontSize: 17,
        borderRadius: 12,
    },

    containerSteps: {
        flex: 1
    },

    infomation: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        fontSize: 17,
        marginTop: 15
    },
});