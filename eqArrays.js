let output = true;
const assertEqual = function(output, expected) {
  if (expected === output) {
    return true;
  } else {
    return false;
  }
};

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

//test code
assertEqual("lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
