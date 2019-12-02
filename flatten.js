const eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(result, expected) {
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== expected[i]) {
      console.log(`this is false`);
      break;
    } else {
      console.log(`this is true`);
    }
  }
};

const flatten = function(array) {
  let merged = [].concat.apply([], array);
  return merged;
};
// flatten([1, 2, [3, 4], 5, [6]]);
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;
