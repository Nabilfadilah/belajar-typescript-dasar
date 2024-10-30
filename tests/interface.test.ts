import { Employee, Manager } from "../src/employee"
import { Seller } from "../src/seller"

describe('Interface', function () {
    it('should support in typescript', function () {
     
        const seller: Seller = {
            id: 1,
            name: "Toko Gulay",
            nib: "9999999",
            npwp: "7777777"
        }

        seller.name = "Ian None"

        console.info(seller)
    })

    // function interface 
    it('should support function interface', function () {
        
        interface addFunction {
            (value1: number, value2: number): number;
        }

        const add: addFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(2,2)).toBe(4);
    })

    // indexable interface
    it('should support indexable interface', function () {
    
        interface StringArray {
            [index: number]: string;
        }

        const names : StringArray = ["Gobil", "Fadilah", "Subarjo"]
        console.log(names)
    })

    // object interface
    it('should support indexeble interface for non number index', function () {
        
        interface StringDictionary {
            [key: string] : string
        }

        const dictionary: StringDictionary = {
            "name" : "GOBiLLA",
            "address": "Indonesia"
        }

        expect(dictionary["name"]).toBe("GOBiLLA");
        expect(dictionary["address"]).toBe("Indonesia");    
    })

    // Extending interface - video 22
    it('should support extends interface', function () {

        const employee: Employee = {
            id: "1",
            name: "Nabilla",
            division: "IT"
        }

        console.info("ini data employee : ", employee)

        const manager: Manager = {
            id: "2",
            name: "Fadilah",
            division: "IT",
            numberOfEmployee: 10
        }

        console.info("ini Data Manager : ", manager)
    })   

    // Function di interface
    it('should support function in interface', function () {
        
        interface Person {
            name: string;
            sayHello(name: string) :string;
        }

        const person: Person = {
            name: "Nabill",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`
            },
        }

        console.info(person.sayHello("Ramsayyy"))
    
    })
})