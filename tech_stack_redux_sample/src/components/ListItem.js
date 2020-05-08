import React, { Component } from 'react';
import {
  View, Text, StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager
} from 'react-native';
import { connect } from 'react-redux';
import CardSection from './common/CardSection';
import * as actions from '../actions';
import { selectLibrary } from '../actions/index';

class ListItem extends Component {
  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    this.state = {
    };
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
