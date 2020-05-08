import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CardSection from './common/CardSection';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onRowPress = () => {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.textStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});
