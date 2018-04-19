import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBTUK1ktV7Hj3jTVYXQEqcfN39JNt4BTjo',
      authDomain: 'udemy-react-auth-test.firebaseapp.com',
      databaseURL: 'https://udemy-react-auth-test.firebaseio.com',
      projectId: 'udemy-react-auth-test',
      storageBucket: 'udemy-react-auth-test.appspot.com',
      messagingSenderId: '456135189449',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>App stub</Text>
      </View>
    );
  }
}

export default App;
