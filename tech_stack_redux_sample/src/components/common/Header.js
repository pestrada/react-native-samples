import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        ...Platform.select({
            ios: {
                paddingTop: 15,
                elevation: 2
            },
            android: {
                elevation: 10,
            }
        }),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});
