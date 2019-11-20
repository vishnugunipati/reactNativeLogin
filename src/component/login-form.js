import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import {authInputChange} from "../action";
import {connect} from 'react-redux';

export default class LoginForm extends Component{
  componentDidMount() {
  const firebaseConfig = {
    apiKey: "AIzaSyDfY_0OZP7RFVdCC5X4TB1HeEEq4RwYlMY",
    authDomain: "reactnativelogin-54f1b.firebaseapp.com",
    databaseURL: "https://reactnativelogin-54f1b.firebaseio.com",
    projectId: "reactnativelogin-54f1b",
    storageBucket: "reactnativelogin-54f1b.appspot.com",
    messagingSenderId: "846444674165",
    appId: "1:846444674165:web:723323d5aabd023f8b8c3c",
    measurementId: "G-447S3930FR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }

  render(){
    return(
      <View>

        <TextInput style = {styles.container} placeholder = 'Email' onChange={ text => console.log(text)}/>
        <TextInput style = {styles.container} placeholder = 'password'/>
        <View>
            <Button style = {styles.button} title = 'submit' type='outline'/>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    borderBottomWidth: 2,
    width: '100%',
    // marginTop: 10,
    marginBottom:10
  },

  button: {
    marginTop: 10,
  }
};