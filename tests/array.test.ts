describe('Array', function () {
    it("should mus declare", function () {

        const names: string[] = ["anil", "budi", "koli"];
        const values: number[] = [1, 2, 3];

        console.info(names)
        console.info(values)
    })

    // read only, tidak bisa diubah lagi
    it("should support readonly array", function () {

        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"]

        console.info("ini adalah read only : ", hobbies)
        console.info(hobbies[0])
        console.info(hobbies[1])

        // hobbies[0 = "Main Game"]
    })

    // Tuple, yang panjang array dan tipe datanya sudah ditentukan dan read only
    it("should support tuple", function () {
        
        const person : readonly [string, string, number] = ["Anbil", "Fadilah", 22]
        
        console.info("Array Tuple : ", person)
        console.info(person[2])
    })

})      