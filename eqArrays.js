const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`true`)
  } else {
    console.log(`false`)
  }
};

const eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

//test code

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
//assertArraysEqual([1,2], [3,4])
