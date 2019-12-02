const assertEqual = require("../assertEqual");
const head = require("../head");
head([6, 7, 8]);
assertEqual(head([6, 7, 8]), 6);
module.exports = assertEqual;
module.exports = head;
