const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;
const middle = require("../middle");

// middle([1, 2, 3, 4, 5, 6]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});
