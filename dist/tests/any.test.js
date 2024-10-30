"use strict";
describe('Any', function () {
    it('should support in typescript', function () {
        const person = {
            id: 1,
            name: "Nabil Fadilah",
            age: 22
        };
        person.age = 21,
            person.address = "Indonesia";
        console.info(person);
    });
});
