describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: "Toko Gulay",
            nib: "9999999",
            npwp: "7777777"
        };
        seller.name = "Ian None";
        console.info(seller);
    });
    // function interface 
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    // indexable interface
    it('should support indexable interface', function () {
        const names = ["Gobil", "Fadilah", "Subarjo"];
        console.log(names);
    });
    // object interface
    it('should support indexeble interface for non number index', function () {
        const dictionary = {
            "name": "GOBiLLA",
            "address": "Indonesia"
        };
        expect(dictionary["name"]).toBe("GOBiLLA");
        expect(dictionary["address"]).toBe("Indonesia");
    });
    // Extending interface - video 22
    it('should support extends interface', function () {
        const employee = {
            id: "1",
            name: "Nabilla",
            division: "IT"
        };
        console.info("ini data employee : ", employee);
        const manager = {
            id: "2",
            name: "Fadilah",
            division: "IT",
            numberOfEmployee: 10
        };
        console.info("ini Data Manager : ", manager);
    });
    // Function di interface
    it('should support function in interface', function () {
        const person = {
            name: "Nabill",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello("Ramsayyy"));
    });
    // intersection types
    it('should support function interface', function () {
        const domain = {
            id: "2",
            name: "JIhannn"
        };
        console.info('Ini intersection type : ', domain);
    });
    // Type Assertions - video 25
    it('should support type interface', function () {
        const person = {
            name: "Eldoo",
            age: "22"
        };
        // harus mengecek dengan hati2, karena datanya takut gak ada
        const person2 = person;
        // person2.sayHello("hasbun")
        console.info("Type Assertions : ", person2);
    });
});
export {};
