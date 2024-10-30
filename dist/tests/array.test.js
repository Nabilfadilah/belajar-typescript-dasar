"use strict";
describe('Array', function () {
    it("should mus declare", function () {
        const names = ["anil", "budi", "koli"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    // read only, tidak bisa diubah lagi
    it("should support readonly array", function () {
        const hobbies = ["Membaca", "Menulis"];
        console.info("ini adalah read only : ", hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0 = "Main Game"]
    });
    // Tuple, yang panjang array dan tipe datanya sudah ditentukan dan read only
    it("should support tuple", function () {
        const person = ["Anbil", "Fadilah", 22];
        console.info("Array Tuple : ", person);
        console.info(person[2]);
    });
});
