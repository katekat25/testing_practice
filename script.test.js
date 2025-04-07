import { capitalize, reverseString } from "./script";

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