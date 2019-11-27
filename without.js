const eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const without = function(numList, removeItem) {
  let result = [];
  for (let i = 0; i < numList.length; i++) {
    let shouldKeep = true;
    for (let j = 0; j < removeItem.length; j++) {
      if (removeItem[j] === numList[i]) {
        shouldKeep = false;
      }
    }
    if (shouldKeep === true) {
      result.push(numList[i]);
    }
  }
  return result;
};

without(["1", 2, 3, 4], ["1", "2", 1]);

const assertArraysEqual = function(result, array) {
  if (result === array) {
    console.log(`Assertion Passed: True`);
  } else {
    console.log(`Assertion Failed: False`);
  }
};
assertArraysEqual(without(["1", 2, 3, 4], ["1", "2", 1]));
