import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { buttonStyle, textStyle } = styles;
        return (
            <TouchableOpacity style={buttonStyle} onPress={this.props.onPress}>
                <Text style={textStyle}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
});
