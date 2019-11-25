let arrayOfNum = [];
const assertEqual = function(actual, expected) {
  if (arrayOfNum[0] === expected) {
    return true;
  } else if (arrayOfNum[0] !== expected) {
    return false;
  }
};

const tail = function(arrayOfNum) {
  return arrayOfNum.slice(1);
};

let original = [8, 9, 4, 10];
let updated = tail(original);
console.log(original);
console.log(updated);

assertEqual(original.length, 4);
