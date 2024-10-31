describe('IT Statement', function () {
    it('should support in typescript', function () {

        const examValue = 90;

        if(examValue > 80) {
            console.info("Good")
        } else if(examValue > 60) {
            console.info("Not Bad")
        } else {
            console.info("Try Again")
        }

    })

    // Ternary Operator - video 31
    it('should support ternary operator', function () {

        const value = 80;
        const say = value >= 75 ? "Congratulation" : "Try Again"

        console.info(say)
    })

    // switch statement - video 32
    it('should support switch statement', function () {
        
        function sayHello(name: string): string {
            switch (name) {
                case "Abil" :
                    return "Hi Abil";
                case "Gordon" :
                    return "Hi Gordon";
                default :
                    return "HayyNgabb"
            }
        } 

        console.info(sayHello("Abil"))
        console.info(sayHello("Gordon"))
        console.info(sayHello("Beta"))
    })
})