const assertEqual = require("./assertEqual");

const head = function(arrayOfNum) {
  let newStr = "";
  newStr += arrayOfNum[0];
  return Number(newStr);
};

module.exports = head;
