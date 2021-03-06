import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from './src/components/Card'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Statistics from "./src/views/Statistics";
import Accusations from "./src/views/Accusations";
import Profile from './src/views/Profile'
import NewOptions from "./src/views/NewOptions";
import NavigatorOptions from "./src/views/NavigatorOptions";
import New from "./src/views/new/New";
import Login from "./src/views/Login";
import List from "./src/views/List";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class App extends Component {
  constructor() {
    super()
    this.state = {
      token: '',
      isSigned: false,
    }
  }

  setStateLogin = (token) => {
    this.setState({ token })
    this.setState({ isSigned: true })
  }

  Pointer = () => {
    return <Login callback={this.setStateLogin} />
  }

  render() {
    return (
      <>
        <NavigationContainer>
          {this.state.isSigned ?
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: 'tomato',
                showLabel: false,
                inactiveTintColor: 'gray',
                style: {
                  marginRight: 10,
                  marginLeft: 10,
                  marginBottom: 10,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  height: 80
                }
              }}
            >
              <Tab.Screen name="Statistics" component={Statistics} options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View style={styles.iconView}>
                      <EntypoIcon name="bar-graph" color={focused ? 'black' : '#000C66'} size={30} />
                      <Text style={styles.textView}>Estat??sticas</Text>
                    </View>
                  )
                }
              }} />
              <Tab.Screen name="Accusations" component={List} options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View style={styles.iconView}>
                      <Icon5 name="clipboard-list" color={focused ? 'black' : '#000C66'} size={30} />
                      <Text style={styles.textView}>Den??ncias</Text>
                    </View>
                  )
                }
              }} />
              <Tab.Screen name="NewOptions" component={NavigatorOptions} options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <View style={styles.iconView}>
                      <Icon name="plus-square" color={focused ? 'black' : '#000C66'} size={30} />
                      <Text style={styles.textView}>Nova den??ncia</Text>
                    </View>
                  )
                }
              }} />
              <Tab.Screen name="Profile" component={Profile} options={{
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
            :
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}>
              <Stack.Screen name="Login" component={this.Pointer} />
            </Stack.Navigator>
          }
        </NavigationContainer>
      </>
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