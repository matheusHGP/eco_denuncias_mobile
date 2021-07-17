import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from './src/components/Card'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Teste = () => {
  return (
    <Text>Teste</Text>
  )
}

const Teste2 = () => {
  return [
    'Descarte irregular de resíduos',
    'Desmatamento',
    'loteamento irregular',
    'Uso indevido de área pública',
    'Maus tratos contra animais',
    'Abandono de animas'].map((title, index) => {
      return (
        <Card key={index} title={title}></Card>
      )
    })
}
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'tomato',
            showLabel: false,
            inactiveTintColor: 'gray',
            style: {
              elevation: 0,
              position: "absolute",
              bottom: 10,
              left: 10,
              right: 10,
              backgroundColor: 'white',
              borderRadius: 15,
              height: 80
            }
          }}
        >
          <Tab.Screen name="Home3" component={Teste2} options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.iconView}>
                  <EntypoIcon name="bar-graph" color={focused ? 'black' : '#000C66'} size={30} />
                  <Text style={styles.textView}>Estatísticas</Text>
                </View>
              )
            }
          }} />
          <Tab.Screen name="Home4" component={Teste2} options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.iconView}>
                  <Icon5 name="clipboard-list" color={focused ? 'black' : '#000C66'} size={30} />
                  <Text style={styles.textView}>Denúncias</Text>
                </View>
              )
            }
          }} />
          <Tab.Screen name="Home2" component={Teste2} options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.iconView}>
                  <Icon name="plus-square" color={focused ? 'black' : '#000C66'} size={30} />
                  <Text style={styles.textView}>Nova denúncia</Text>
                </View>
              )
            }
          }} />
          <Tab.Screen name="Home" component={Teste} options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.iconView}>
                  <Icon name="user" color={focused ? 'black' : '#000C66'} size={30} />
                  <Text style={styles.textView}>Perfil</Text>
                </View>
              )
            }
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  iconView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center"
  },
  textView: {
    textAlign: 'center'
  }
});

export default App;