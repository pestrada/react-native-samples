/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';


export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDbdWPddI0R-znQspBMU4T0ztQ0Va1XuKM',
      authDomain: 'rn-manager-e593f.firebaseapp.com',
      databaseURL: 'https://rn-manager-e593f.firebaseio.com',
      projectId: 'rn-manager-e593f',
      storageBucket: 'rn-manager-e593f.appspot.com',
      messagingSenderId: '297769654988'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
