describe('Type Alias', function () {
    it('should support in typescript', function () {
        const category = {
            id: "1",
            name: "Handphone"
        };
        const product = {
            id: "id",
            name: "Samsung A55",
            price: 5000000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
