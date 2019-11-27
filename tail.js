const assertEqual = function(newArray, expected) {
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] !== expected[i]) {
      console.log(`This is false`)
      break;
    } else {
      console.log(`This is true`)
    }
  }
};


const tail = function(arrayOfNum) {
  let newArray = [];
  newArray.push(arrayOfNum.slice(1));
  return newArray[0];
};

tail([3,4,5,8])
assertEqual(tail([3,4,5,8]),[4,5,8])
