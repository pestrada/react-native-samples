import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ProductsRepository } from './ProductsRepository';

export const CreateProductScreen = ({ route, navigation }) => {
    const [productName, setProductName] = useState('');
    const repository = ProductsRepository.getInstance();

    onTextChanged = (text) => setProductName(text);

    saveProduct = () => {
        const created = repository.create(productName);
        if (created) {
            route.params.refresh();
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
