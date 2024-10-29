import { sayHello } from "../src/say-hello";

describe('sayHello', function (): void {
    it("should return hello abil", function (): void {
        expect(sayHello('abil')).toBe("Hello abil");
    })
})