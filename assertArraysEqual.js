let output = true;
const eqArrays = function(arrOne, arrTwo) {
  if (
    arrOne[0] === arrTwo[0] &&
    arrOne[1] === arrTwo[1] &&
    arrOne[2] === arrTwo[2]
  ) {
    return output;
  } else {
    return !output;
  }
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    return true;
  } else {
    return false;
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
