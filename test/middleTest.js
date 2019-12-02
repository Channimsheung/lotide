const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
