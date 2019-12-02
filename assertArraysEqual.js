const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`Assertion Passed: True`);
    return true;
  } else {
    console.log(`Assertion Failed: False`);
    return false;
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);

module.exports = assertArraysEqual;
