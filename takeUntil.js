const takeUntil = function (array, callback) {
  // ...
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i)
    }

  }
  return array;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


//[1,2,5,7,2]


const eqArrays = function (arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    return true;
  }
};

///////////////////////start testing
const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`Assertion Passed: True`);
  } else {
    console.log(`Assertion Failed: False`);
  }
};


console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));