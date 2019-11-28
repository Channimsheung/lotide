const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    //console.log(`The length are unequal`);
    return false;
  } else {
    // console.log(`The length are equal`);
    for (let i = 0; i < Object.keys(object1).length; i++) {
      if (
        Array.isArray(Object.values(object1)[i]) &&
        Array.isArray(Object.values(object2)[i])
      ) {
        return eqArrays(Object.values(object1)[i], Object.values(object2)[i]);
      }
      //console.log(Object.keys(object1)[i])
      //console.log(Object.keys(object2)[i])
      if (Object.values(object1)[i] !== Object.values(object2)[i]) {
        //console.log('The arrays are not equal)
        return false;
      }
    }
  }
  return true;
};

const eqArrays = function(arrOne, arrTwo) {
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
