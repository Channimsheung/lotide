const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("returns [1,2] for [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [3]), [1, 2]);
  });
});
