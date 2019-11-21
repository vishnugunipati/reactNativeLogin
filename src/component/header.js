import React, { Component }from 'react';
import { View, Text, } from 'react-native';

export default class Header extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>header</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    paddingTop: 35,
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
  },

  welcome: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold'
  },
};
