// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   }
// };
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
//Object.keys(ab).length

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    // console.log(`The length are unequal`);
    return false;
  } else {
    // console.log(`The length are equal`);
    for (let i = 0; i < Object.keys(object1).length; i++) {
      if (Object.keys(object1) !== Object.keys(object2)) {
        // console.log('The arrays are not equal)
        return false;
      }
    }
  }
  return true;
};

eqObjects(ab, ba); //true
eqObjects(ab, abc); //false

const eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};
eqArrays([1, 2, 3], [1, 2, 8]);
