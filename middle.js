const eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(numOfArray, array) {
  for (let i = 0; i < numOfArray.length; i++) {
    if (numOfArray[i] !== array[i]) {
      console.log(`This is false`);
      break;
    } else {
      console.log(`This is true`);
    }
  }
};

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
middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
