import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight, Touchable, TouchableOpacity } from "react-native";
import CustomModal from "../components/CustomModal"

const Card = ({ title, navigation }) => {
    const [modalOpened, setModalOpened] = useState(false)
    return (
        <>
            <TouchableOpacity onPress={() => setModalOpened(true)}>
                <View style={styles.card}>
                    <Text style={styles.textCard}>{title}</Text>
                </View>
            </TouchableOpacity >
            {modalOpened && <CustomModal content={title} navigation={navigation} onClose={() => setModalOpened(false)}/>}
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 30,
        elevation: 3,
        backgroundColor: '#42A5C5',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        height: 70,
        margin: 100,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCard: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Card;