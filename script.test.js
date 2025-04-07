import { capitalize } from "./script";

test('capitalize function exists', () => {
    expect(capitalize).toBeDefined();
})

test('capitalize takes a string and returns a string', () => {
  expect(typeof capitalize("lol")).toBe("string");
});

test('capitalize returns a modified version of your input', () => {
  let testCases = ["haha", "test word", "amazing"];
  testCases.forEach(function(word) {
    expect(capitalize(word).charAt(0).toUpperCase()).toMatch(word.charAt(0).toUpperCase());
  })
});

test('capitalize returns a string with the first character capitalized', () => {
  let testCases = ["haha", "test word", "amazing"];
  testCases.forEach(function(word) {
    expect(capitalize(word)).toMatch(word.charAt(0).toUpperCase());
  })
});