import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size={this.props.size || LARGE} />
      </View>
    );
  }
}

const LARGE = 'large';
const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
