"use strict";
describe('Array', function () {
    it("should mus declare", function () {
        const names = ["anil", "budi", "koli"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });

    it("should support readonly array", function () {
        const hobbies = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0 = "Main Game"]
    });

});
