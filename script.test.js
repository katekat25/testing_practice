import { capitalize, reverseString, calculator } from "./script";

test('capitalize function exists', () => {
  expect(capitalize).toBeDefined();
})

test('capitalize takes a string and returns a string', () => {
  expect(typeof capitalize("lol")).toBe("string");
});

test('capitalize returns a modified version of your input', () => {
  let testCases = ["haha", "test word", "amazing"];
  testCases.forEach(function (word) {
    expect(capitalize(word).charAt(0).toUpperCase()).toMatch(word.charAt(0).toUpperCase());
  })
});

test('capitalize returns a string with the first character capitalized', () => {
  let testCases = ["haha", "test word", "amazing"];
  testCases.forEach(function (word) {
    expect(capitalize(word)).toMatch(word.charAt(0).toUpperCase());
  })
});

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
})

test('reverseString returns a string', () => {
  expect(typeof reverseString("hmm")).toBe("string");
  expect(typeof reverseString(9)).toBe("string");
})

test('reverseString returns a string, reversed', () => {
  expect(reverseString(12345)).toBe("54321");
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("hi there!")).toBe("!ereht ih");
})

test('calculator object exists', () => {
  expect(calculator).toBeDefined();
})

test('calculator has basic operation methods', () => {
  expect(calculator.add).toBeDefined();
  expect(calculator.subtract).toBeDefined();
  expect(calculator.multiply).toBeDefined();
  expect(calculator.divide).toBeDefined();
})

test('calculator add method adds numbers correctly', () => {
  expect(calculator.add(2, 5)).toBe(7);
  expect(calculator.add(72, 61)).toBe(133);
  expect(calculator.add(-151, 151)).toBe(0);
})

test('calculator subtract method subtracts numbers correctly', () => {
  expect(calculator.subtract(7, 3)).toBe(4);
  expect(calculator.subtract(-200, -50)).toBe(-150);
  expect(calculator.subtract(10, 30)).toBe(-20);
})

test('calculator multiply method multiplies numbers correctly', () => {
  expect(calculator.multiply(6, 6)).toBe(36);
  expect(calculator.multiply(-4, 5)).toBe(-20);
  expect(calculator.multiply(-11, -13)).toBe(143);
})

test('calculator divide by zero returns error', () => {
  expect(() => calculator.divide(4, 0)).toThrow();
})

test('calculator divide method divides numbers correctly', () => {
  expect(calculator.divide(4, 1)).toBe(4);
  expect(calculator.divide(10, 5)).toBe(2);
  expect(calculator.divide(7, 3)).toBe(2.3333333333333335);
})