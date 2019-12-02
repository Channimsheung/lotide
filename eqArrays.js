// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqArrays;
