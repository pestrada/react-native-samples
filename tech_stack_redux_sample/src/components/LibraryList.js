import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItem = ({ item }) => (
    <ListItem library={item} />
  );

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => ({
  libraries: state.libraries
});

export default connect(mapStateToProps)(LibraryList);
