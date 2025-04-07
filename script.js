function capitalize(string) {
  console.log(string.charAt(0).toUpperCase());
  return string.charAt(0).toUpperCase();
}

function reverseString(string) {
  return String(string).split("").reverse().join("");
}

export { capitalize, reverseString }