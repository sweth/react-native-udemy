import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
        <LoginForm>
        </LoginForm>
      </View>
    );
  }
}

export default App;
