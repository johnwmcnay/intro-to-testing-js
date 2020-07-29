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
    it('should return the string "Hello, World!" when executed with array, object, or function', function() {
        expect(sayHello([1, 2, 3])).toBe("Hello, World!");
        expect(sayHello(helloWorld)).toBe("Hello, World!");
        expect(sayHello({name: "John", age: 38})).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when executed with 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when executed with "5"', function() {
        expect(isFive("5")).toBe(true);
    });
});

describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function() {
         expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when executed with an even number', function() {
        expect(isEven(2)).toBe(true);
        expect(isEven(-4)).toBe(true);
    });
    it('should return true when executed with an even number as a string', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when executed with an odd number', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when executed with a non-number string', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return false when executed with Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when executed with a boolean', function() {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should return false when executed with no argument', function() {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called, even with no argument', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when executed with a case-insensitve, single vowel string', function() {
        expect(isVowel("a")).toBe(true);
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when executed with a non-vowel string', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when executed with a number', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when executed with a boolean', function() {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when executed with a multi-character string', function() {
        expect(isVowel("banana")).toBe(false);
    });
});

describe('add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return a "number"/NaN even with no arguments', function() {
        expect(typeof add()).toBe("number");
        expect(isNaN(add())).toBe(true);
    });
    it('should return the calculated value when executed with two numbers', function() {
        expect(add(2, 3)).toBe(5);
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return the calculated value when one or both arguments are strings containing numbers', function() {
        expect(add("5", 6)).toBe(11);
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when executed with strings that are not numbers', function() {
        expect(isNaN(add("banana", "split"))).toBe(true);
        expect(isNaN(add(2, "split"))).toBe(true);
    });
});