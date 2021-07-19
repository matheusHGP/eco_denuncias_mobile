import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const CustomModal = ({ problem, onClose, navigation }) => {
  return (
    <View style={styles.floatingView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.description}>{problem.description}</Text>
            </View>

            <View style={styles.modalBody}>
              <Text style={styles.explication}>{problem.explication}</Text>
            </View>

            <View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  onClose(); navigation.navigate('Nova Denúncia', {problem})
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

export default CustomModal;