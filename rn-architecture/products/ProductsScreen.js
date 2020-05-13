import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ProductsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>These are the products !!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold'
    }
});
