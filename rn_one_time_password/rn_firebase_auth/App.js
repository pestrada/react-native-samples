import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyB6gYhoOvPyhyJlA6BSBdVaX6PksccAa8E",
      authDomain: "rn-one-time-password-7bc98.firebaseapp.com",
      databaseURL: "https://rn-one-time-password-7bc98.firebaseio.com",
      projectId: "rn-one-time-password-7bc98",
      storageBucket: "rn-one-time-password-7bc98.appspot.com",
      messagingSenderId: "109528421293"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
