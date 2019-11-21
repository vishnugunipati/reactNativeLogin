import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import {authInputChange, login} from "../action";
import {connect} from 'react-redux';

class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }


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

  login(){
    console.log('enter login function:');
    const { email, password } = this.props;
    this.props.login(email, password);
  }

  render(){
    return(
      <View style = {styles.container}>

        {/*<TextInput style = {styles.textInput} placeholder = 'Email' */}
                   {/*value ={this.props.email}*/}
                   {/*onChangeText={ text => this.props.authInputChange({'field': 'email', 'value': text})}/>*/}
        {/*<TextInput style = {styles.textInput} placeholder = 'password'*/}
                   {/*value ={this.props.password}*/}
                   {/*onChangeText={ text => this.props.authInputChange({'field': 'password', 'value': text})}/>*/}
        <View>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to email!"
            onChangeText={text => this.props.authInputChange({'field': 'email', 'value': text})}
            value={this.props.email}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Type here to password!"
            onChangeText={text => this.props.authInputChange({'field': 'password', 'value': text})}
            value={this.props.password}
          />

            <Button style = {styles.button}
                    onPress={this.login.bind(this)}
                    title = 'submit' type='outline'/>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return{
    email: state.auth.email,
    password: state.auth.password,
  }
};

export default connect(mapStateToProps, {authInputChange, login})(LoginForm);

const styles = {
  container: {
    // flex: 1
  },
  textInput : {
    // width: '100%',
    borderBottomWidth: 2,
    marginBottom:10,

  },

  button: {
    marginTop: 10,
  }
};
