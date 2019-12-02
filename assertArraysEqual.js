const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`Assertion Passed: True`);
  } else {
    console.log(`Assertion Failed: False`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);

module.exports = assertArraysEqual;
