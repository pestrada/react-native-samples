import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const ProductsScreen = ({ navigation }) => {
    goToCreateProduct = () => navigation.navigate('CreateProduct');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>These are the products !!</Text>
            <Button title="Create" onPress={this.goToCreateProduct} />
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
