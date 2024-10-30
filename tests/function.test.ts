describe('Function', function () {
    it('should support in typescript', function () {
        
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Nabil")).toBe("Hello Nabil");

        function printHello(name: string): void {
            console.info(`Hello ${name}`)
        }

        printHello("Ramsay")
    })

    // function parameter
    it('should support in typescript', function () {
        // kalau mau tambahkan default value contohnya ("Guest")
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Nabil")).toBe("Hello Nabil");
    })

    // sum function
    it('should support rest parameter', function () {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        } 

        expect(sum(1,2,3,4,5)).toBe(15);
    })

    it('should support optional parameter', function () {
        function sayHello(firstName: string, lastName? : string): string {
            if(lastName) {
                return `Hello ${firstName} ${lastName}`
            } else {
                return `Hello ${firstName}`
            }
           
        }

        expect(sayHello("Gordon")).toBe("Hello Gordon")
        expect(sayHello("Gordon", "Fadilah")).toBe("Hello Gordon Fadilah")
    
    })
})