const assertEqual = require("./assertEqual");
const tail = function(arrayOfNum) {
  let newArray = [];
  newArray.push(arrayOfNum.slice(1));
  return newArray[0];
};

module.exports = tail;
