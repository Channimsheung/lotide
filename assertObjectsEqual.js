const inspect = require('util').inspect;

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    // console.log(`The length are unequal`);
    return false;
  } else {
    // console.log(`The length are equal`);
    for (let i = 0; i < Object.keys(object1).length; i++) {
      if (Object.keys(object1).sort()[i] !== Object.keys(object2).sort()[i]) {
        // console.log('The arrays are not equal)
        return false;
      } else if (Object.values(object1).sort()[i] !== Object.values(object2).sort()[i]) {
        return false;
      }

    }
  }
  return true;
}


const assertObjectsEqual = function (object1, object2) {

  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
  // ...
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })