import { Product } from "./Product";

export class ProductsRepository {
    static instance = null;

    constructor() {
        this.id = 0;
        this.data = new Map();
    }

    static getInstance = () => {
        if (!ProductsRepository.instance) {
            ProductsRepository.instance = new ProductsRepository();
        }
        return ProductsRepository.instance;
    }

    create = (productName) => {
        if (!productName) return false;
        this.id++;
        const product = new Product(this.id, productName);
        this.data.set(this.id, product);
        return true;
    }

    findAll = () => Array.from(this.data.values());

    find = (id) => {
        if (!id) return false;
        if (!this.data.has(id)) return false;
        return this.data.get(id);
    }

    update = (product) => {
        if (!product) return false;
        if (!this.data.has(product.id)) return false;
        this.data.set(product.id, product);
        return true;
    }

    delete = (id) => {
        if (!id) return false;
        if (!this.data.has(id)) return false;
        this.data.delete(id);
        this.id--;
        return true;
    }
}