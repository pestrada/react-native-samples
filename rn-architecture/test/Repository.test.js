import { ProductsRepository } from "../products/ProductsRepository";
import { Product } from "../products/Product";

let repository;
beforeEach(() => {
    repository = new ProductsRepository();
});

test('given no product, create() returns false', () => {
    expect(repository.create()).toBe(false);
})

test('given a product, create() returns true', () => {
    let product = new Product(1, "a product");

    expect(repository.create(product)).toBe(true);
})

test('given a product id, find(id) returns the product', () => {
    let product = new Product(1, "a product");
    repository.create(product);

    expect(repository.find(product.id)).toEqual(product);
})

test('given non existing product, update() returns false', () => {
    let product = new Product(1, "non existing product");

    expect(repository.update(product)).toBe(false);
})

test('given an existing product, update() updates its name', () => {
    let product = new Product(1, "a product");
    repository.create(product);
    product.name = "the new name";

    expect(repository.update(product)).toBe(true);
    let updatedProduct = repository.find(product.id);
    expect(updatedProduct.name).toEqual("the new name");
})

test('given an existing product, delete() removes the product', () => {
    let product = new Product(1, "a product");
    repository.create(product);

    expect(repository.delete(1)).toBe(true);
    expect(repository.find(1)).toBe(false);
})