import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it("should return hello abil", function () {
        expect(sayHello('abil')).toBe("Hello abil");
    });
});
