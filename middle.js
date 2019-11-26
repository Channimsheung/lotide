const eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(numOfArray) {
  if (middle(numOfArray))) {
    console.log(`Assertion Passed: True`);
  } else {
    console.log(`Assertion Failed: False`);
  }
};

const middle = function(numOfArray) {
  if (numOfArray.length % 2 !== 0) {
    output.push(Math.ceil(numOfArray.length / 2));
  } else {
    output.push(numOfArray.length / 2);
    output.push(numOfArray.length / 2 + 1);
  }
  return output;
};
console.log([1, 2, 3, 4, 5]);
