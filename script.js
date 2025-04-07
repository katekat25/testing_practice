function capitalize(string) {
  console.log(string.charAt(0).toUpperCase());
  return string.charAt(0).toUpperCase();
}

function reverseString(string) {
  return String(string).split("").reverse().join("");
}

const calculator = {
  add: function(x, y) {
    return Number(x) + Number(y);
  },
  subtract: function(x, y) {
    return Number(x) - Number(y);
  },
  multiply: function(x, y) {
    return Number(x) * Number(y);
  },
  divide: function(x, y) {
    if (Number(y) === 0) {
      throw new Error('Cannot divide by zero!');
    }
    return Number(x) / Number(y);
  }
}

export { capitalize, reverseString, calculator }