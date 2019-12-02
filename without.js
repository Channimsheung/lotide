const eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(result, array) {
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== array[i]) {
      console.log(`This is false`);
      break;
    } else {
      console.log(`This is true`);
    }
  }
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

// assertArraysEqual(without(["1", 2, 3, 4], ["1", "2", 1]), [2, 3, 4]);
// eqArrays(without(["1", 2, 3, 4], ["1", "2", 1]), [2, 3, 4]);

module.exports = without;
