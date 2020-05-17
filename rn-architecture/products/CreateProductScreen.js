import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ProductsRepository } from './ProductsRepository';
import { Product } from './Product';

export const CreateProductScreen = ({ navigation }) => {
    const [productName, setProductName] = useState('');
    const repository = ProductsRepository.getInstance();

    onTextChanged = (text) => setProductName(text);

    saveProduct = () => {
        const product = new Product(productName);
        const created = repository.create(product);
        if (created) {
            navigation.goBack();
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={this.onTextChanged}
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
