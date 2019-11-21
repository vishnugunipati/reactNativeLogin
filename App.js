import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/component/login-form';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
