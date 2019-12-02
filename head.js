const assertEqual = require("./assertEqual");

// const head = function(arrayOfNum) {
//   let newStr = "";
//   newStr += arrayOfNum[0];
//   return newStr[0];
// };

const head = function(arrayOfNum) {
  let firstEl;
  firstEl = arrayOfNum[0];
  return firstEl;
};

module.exports = head;
