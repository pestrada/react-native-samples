import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ProductsRepository } from './ProductsRepository';

export const CreateProductScreen = ({ navigation }) => {

    saveProduct = () => {
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter name"
            />
            <Button title="Save" onPress={this.saveProduct} />
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
    },
    input: {
        height: 40
    }
});
