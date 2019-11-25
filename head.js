let arrayOfNum = [];
const assertEqual = function(actual, expected) {
  if (arrayOfNum[0] === expected) {
    return true;
  } else if (arrayOfNum[0] !== expected) {
    return false;
  }
};

const head = function(arrayOfNum) {
  return arrayOfNum[0];
};
head([6]);

assertEqual(head([6]), 5);
