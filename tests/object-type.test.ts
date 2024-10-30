import { Category, Product } from "../src/object-type";

describe('Type Alias', function () {
    it('should support in typescript', function () {

        const category: Category = {
            id: "1", // ini boleh string atau number
            name: "Handphone",
            // description: "Apaan tuhh NGabbb"
        }

        const product: Product = {
            id: "id", // ini boleh string atau number
            name: "Samsung A55",
            price: 5000000,
            category: category
        }

        console.info(category)
        console.info(product)

    })
})