import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet, Linking, Platform } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { MapView } from 'expo';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button
        title="Settings"
        onPress={() => { navigation.navigate('settings') }}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1)"
      />
    )
  })

  renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      const region = this.props.region;
      const initialRegion = {
        longitude: region.longitude,
        latitude: region.latitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      };

      return (
        <Card title={job.title} key={job.id}>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              liteMode
              cacheEnabled={Platform.OS === 'android'}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{job.company}</Text>
              <Text style={styles.italics}>{job.title}</Text>
            </View>
            <Button
              title="Apply Now!"
              backgroundColor="#03A9F4"
              onPress={() => { Linking.openURL(job.url) }}
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
});

const mapStateToProps = (state) => {
  return { likedJobs: state.likedJobs, region: state.jobs.region };
};

export default connect(mapStateToProps)(ReviewScreen);
