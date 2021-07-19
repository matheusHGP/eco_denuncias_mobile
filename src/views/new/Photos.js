import React, { Component, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import CustomizeSteps from "../../components/CustomizeSteps";
import { useEffect } from "react/cjs/react.production.min";

const Stack = createStackNavigator();

export default class Resume extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            capturePhoto: null,
            images: []
        }

        this.openAlbum = this.openAlbum.bind(this)
    }

    setImages = (response) => {
        if (response.didCancel) {
            alert('Operação cancelada')
        } else if (response.error) {
            alert('Ocorreu um erro. Tente novamente')
        } else {
            const images = []
            response.assets.map(image => {
                images.push({ uri: image.uri, hash_image: 'data:image/jpeg;base64,' + image.base64, is_occurrence: true })
            })
            this.props.onChangePhotos([...this.props.state.photos, ...images])
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
        const array = [...this.props.state.photos]
        array.splice(index, 1)
        this.props.onChangePhotos(array)
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.header}> Selecione as imagens</Text>
                <Text style={styles.body}> Selecione images de seu dispositivo ou tire uma foto agora mesmo </Text>
                <View style={styles.buttonsOptions}>
                    <TouchableOpacity onPress={() => this.openAlbum()}>
                        <Text style={styles.selecionarText}> Selecionar </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.images}>
                    {this.props.state.photos.map((image, index) => {
                        return (
                            <View style={styles.viewImage}>
                                <Image key={index} source={{ uri: image.hash_image }} style={styles.image} />
                                <Text style={styles.textRemoveImage} onPress={() => this.removeImage(index)}>Remover</Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 23,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    body: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700'
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
    },
    header2: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'bold',
        marginTop: 30
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
    }
});