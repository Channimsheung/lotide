const assertEqual = require("../assertEqual");
const assert = require("chai").assert;
const tail = require("../tail");

// tail([3, 4, 5, 8]);
// assertEqual(tail([4, 5, 6])[0], 5);

describe("#tail", () => {
  it("returns [2,3,4,5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
});
