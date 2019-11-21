import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/component/login-form';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers'
import ReduxThunk from 'redux-thunk'
import Header from './src/component/header';

export default function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store ={ store} >
      <View style={styles.container}>
        <LoginForm/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
