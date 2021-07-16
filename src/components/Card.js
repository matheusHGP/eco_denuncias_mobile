import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const Card = ({ title }) => {
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.textCard}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        height: 80,
        margin: 100,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCard:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default Card;