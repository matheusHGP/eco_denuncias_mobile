import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const CustomModalSuccess = ({ occurrence, onClose }) => {
    return (
        <View style={styles.floatingView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.hearder}> Denúncia enviada com sucesso ! </Text>
                        <Text style={styles.hearder}> Número da denúncia: 12345/2021 </Text>
                        <Text style={styles.description}>
                            Muito obrigado por colaborar conosco.
                            Você está nos ajudando a tornar a
                            cidade de Franca um lugar melhor !
                        </Text>
                        <Text style={styles.description}>
                            Você pode acompanhar o status das
                            suas denúncias na tela de denúncias.
                        </Text>
                        <Text style={styles.warn}>
                            A falta de informações suficientes ao
                            processamento da ocorrência pode
                            impossibilitar a apuração dos fatos
                        </Text>

                        <View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    onClose()
                                }}
                            >
                                <Text style={styles.textStyle}>Continuar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    hearder: {
        textAlign: 'center',
        fontSize: 23,
        margin: 20
    },

    description: {
        textAlign: 'center',
        fontSize: 20,
        margin: 20,
    },

    warn: {
        textAlign: 'center',
        fontSize: 20,
        margin: 20,
        color: 'red'
    },
    description: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: "center",
        color: 'black',
        fontWeight: 'bold'
    },
    modalBody: {
        marginBottom: 20
    },
    floatingView: {
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 25,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default CustomModalSuccess;