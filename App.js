import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Card from './src/components/Card'
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

class App extends Component {
  constructor(){
    super()
    this.state = {
      activeIcon: ''
    }
  }
  render() {
    return (
      <>
        <ScrollView>
          <Card title="teste" />
          <Card title="teste" />
          <Card title="teste" />
          <Card title="teste" />
          <Card title="teste" />
          <Card title="teste" />
        </ScrollView>
        <View style={styles.bottomBar}>
          <View style={styles.viewIcon} onTouchStart={() => this.setState({activeIcon:'list-alt'})}>
            <Icon style={styles.icon} name="list-alt" size={30} color={this.state.activeIcon === 'list-alt' ? '#42A5C5' : 'white'}/>
            <Text style={styles.textIcon}>Denuncias</Text>
          </View>
          <View style={styles.viewIcon} onTouchStart={() => this.setState({activeIcon:'plus-circle'})}>
            <Icon style={styles.icon} name="plus-circle" size={30} color={this.state.activeIcon === 'plus-circle' ? '#42A5C5' : 'white'} />
            <Text style={styles.textIcon}>Nova Denuncia</Text>
          </View>
          <View style={styles.viewIcon} onTouchStart={() => this.setState({activeIcon:'bar-graph'})}>
            <EntypoIcon style={styles.icon} name="bar-graph" size={30} color={this.state.activeIcon === 'bar-graph' ? '#42A5C5' : 'white'}/>
            <Text style={styles.textIcon}>Estatísticas</Text>
          </View>
          <View style={styles.viewIcon} onTouchStart={() => this.setState({activeIcon:'user'})}>
            <Icon style={styles.icon} name="user" size={30} color={this.state.activeIcon === 'user' ? '#42A5C5' : 'white'}/>
            <Text style={styles.textIcon}>Perfil</Text>
          </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: '#446DAB',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  viewIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'center'
  },
  icon:{
    marginTop: 22
  },
  textIcon: {
    marginTop: 0,
    color: 'white',
    fontWeight: '100',
    fontStyle: 'segaon-thin'
  }
});

export default App;