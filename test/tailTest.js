const assertEqual = require("../assertEqual");
const tail = require("../tail");

tail([3, 4, 5, 8]);
assertEqual(tail([4, 5, 6])[0], 5);

module.exports = assertEqual;
module.exports = tail;
