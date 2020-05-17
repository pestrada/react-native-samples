export class ProductsRepository {

    constructor() {
        this.data = new Map();
    }

    create = (product) => {
        if (!product) return false;
        this.data.set(product.id, product);
        return true;
    }

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
        return this.data.delete(id);
    }
}