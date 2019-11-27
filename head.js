const assertEqual = function(newStr, expected) {
  if (newStr !== expected) {
    console.log(`This is false`)
  } else {
    console.log(`This is true`);
  }
};

const head = function(arrayOfNum) {
  let newStr = '';
  newStr += arrayOfNum[0];
  return Number(newStr);
};
head([6,7,8]);
assertEqual(head([6,7,8]),6)
