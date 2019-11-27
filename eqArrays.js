const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`This is true`);
  } else {
    console.log(`This is false`);
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
eqArrays([1, 2, 3], [1, 2, 8]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
