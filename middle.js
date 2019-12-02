const assertArraysEqual = require("./assertArraysEqual");

// const eqArrays = function(arrOne, arrTwo) {
//   for (let i = 0; i < arrOne.length; i++) {
//     if (arrOne[i] !== arrTwo[i]) {
//       return false;
//     }
//   }
//   return true;
//};

const middle = function(numOfArray) {
  let output = [];
  if (numOfArray.length % 2 !== 0) {
    output.push(Math.ceil(numOfArray.length / 2));
  } else {
    output.push(numOfArray.length / 2);
    output.push(numOfArray.length / 2 + 1);
  }
  return output;
};

//test code

// eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

module.exports = middle;
