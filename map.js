

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


const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`Assertion Passed: True`);
  } else {
    console.log(`Assertion Failed: False`);
  }
};
///////////////////////start testing

const words = ["ground", "control", "to", "major", "tom"];

//method 1
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const result3 = results;


//method 2
const result1 = map(words, function (x) { return x.toUpperCase() });

//method 3
const result2 = map(words, x => x.toUpperCase());

console.log(assertArraysEqual(result3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]));
console.log(assertArraysEqual(result1, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]));
console.log(assertArraysEqual(result2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]));

