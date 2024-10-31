describe('Loop', function () {
    // for loop
    it('should support for Loop', function () {
    
        const names : string[] = ["Mohammad", "Nabil", "Fadilah"]

        // for i
        for (let i = 0; i < names.length; i++) {
            console.info(names[i])
        }

        // fot of
        for (const name of names) {
            console.info(name)
        }

        // for in
        for (const index in names) {
            console.info(names[index])
        }
    })

    // while loop - video 34
    it('should support while loop', function () {

        let counter:number = 0;
        
        while (counter < 10) {
            console.info(counter);
            counter++;
        }
    
    })
})
