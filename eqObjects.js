const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
//Object.keys(ab).length

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


console.log(eqObjects(ab, ba)); //true
console.log(eqObjects(ab, abc)); //false
