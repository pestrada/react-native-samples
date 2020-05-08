import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import * as actions from '../actions';
import Swipe from '../components/Swipe';
import { Card, Button, Icon } from 'react-native-elements';

class DeckScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Jobs',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="description" size={30} color={tintColor} />
    }
  })

  renderCard = (job) => {
    const region = this.props.jobs.region;
    const initialRegion = {
      longitude: region.longitude,
      latitude: region.latitude,
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta
    };

    return (
      <Card title={job.title}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            liteMode
            cacheEnabled={Platform.OS === 'android'}
            initialRegion={initialRegion}
          >

          </MapView>
        </View>

        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.location}</Text>
        </View>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No more jobs">
        <Button
          title="Back To Map"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
          onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.jobs.results}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
          keyProp="id"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
});

const mapStateToProps = ({ jobs }) => {
  return { jobs };
}

export default connect(mapStateToProps, actions)(DeckScreen);
