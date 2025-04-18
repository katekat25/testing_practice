function capitalize(string) {
  console.log(string.charAt(0).toUpperCase());
  return string.charAt(0).toUpperCase();
}

function reverseString(string) {
  return String(string).split("").reverse().join("");
}

const calculator = {
  add: function (x, y) {
    return Number(x) + Number(y);
  },
  subtract: function (x, y) {
    return Number(x) - Number(y);
  },
  multiply: function (x, y) {
    return Number(x) * Number(y);
  },
  divide: function (x, y) {
    if (Number(y) === 0) {
      throw new Error('Cannot divide by zero!');
    }
    return Number(x) / Number(y);
  }
}

function caesarCipher(string, shiftFactor) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const charArray = [...string];
  const newArray = [];
  charArray.forEach(function (char) {
    const isUppercase = char === char.toUpperCase();
    if (alphabet.includes(char.toLowerCase())) {
      let newChar = alphabet[(alphabet.indexOf(char.toLowerCase()) + shiftFactor) % 26];
      newArray.push(isUppercase ? newChar.toUpperCase() : newChar);
    } else newArray.push(char);
  });
  return newArray.join("");
}

function analyzeArray(array) {
  function getAverage(array) {
    let sum = array.reduce((partialSum, a) => partialSum + a, 0);
    return sum / array.length;
  }

  function getMin(array) {
    return Math.min.apply(null, array);
  }

  function getMax(array) {
    return Math.max.apply(null, array);
  }

  return {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }