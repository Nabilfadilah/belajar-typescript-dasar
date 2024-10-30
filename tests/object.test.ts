describe('Object', function () {
    it('should support in typescript', function () {
        
        // deklarasi objek
        const person: {id: string, name: string, hobbies?: string[]} = {
            id: "1",
            name: "Abil"
        }

        console.info(person)

        person.id = "2";
        person.name = "Fadilah"

        console.info(person)

    })
})