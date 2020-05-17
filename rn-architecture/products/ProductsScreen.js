import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ProductsRepository } from './ProductsRepository';
export const ProductsScreen = ({ navigation }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        refreshProducts();
    }, [])

    refreshProducts = () => {
        const repository = ProductsRepository.getInstance();
        const products = repository.findAll();
        if (products) {
            setData(products);
        } else {
            setData([]);
        }
    }

    goToCreateProduct = () => navigation.navigate('CreateProduct', {
        refresh: this.refreshProducts
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>These are the products !!</Text>
            <Button title="Create" onPress={this.goToCreateProduct} />

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
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