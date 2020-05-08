/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import firebase from 'firebase';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/common/Header';
import LoginForm from './src/components/LoginForm';
import Button from './src/components/common/Button';
import Spinner from './src/components/common/Spinner';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB_vPJ2XnjzQK0-PYF1wJOsk737g-4jpU0',
      authDomain: 'rn-authentication-201bc.firebaseapp.com',
      databaseURL: 'https://rn-authentication-201bc.firebaseio.com',
      projectId: 'rn-authentication-201bc',
      storageBucket: 'rn-authentication-201bc.appspot.com',
      messagingSenderId: '748220859323'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  logOut = () => {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={this.logOut}>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

