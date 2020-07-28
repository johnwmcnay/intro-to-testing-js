// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed with undefined', function() {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed with true', function() {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed with false', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed with null', function() {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed with ""', function() {
        expect(sayHello('')).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed with 2.3', function() {
        expect(sayHello(2.3)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed with "5"', function() {
        expect(sayHello("5")).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed with an array', function() {
        expect(sayHello([1, 2, 3])).toBe("Hello, World!")
    });

});