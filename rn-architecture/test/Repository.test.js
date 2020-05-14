import { Repository } from "../products/Repository";

const repository = new Repository()

test('given a new product, create() stores the product', () => {
    expect(repository.create()).toBe(true)
})
