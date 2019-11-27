const findKeyByValue = function(bestTVShowsByGenre, value) {
  for (let item in bestTVShowsByGenre) {
    if (value === bestTVShowsByGenre[item]) {
      return item;
    }
  }
};
findKeyByValue(
  {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  },
  "The Wire"
);

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

assertEqual(
  findKeyByValue(
    {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    },
    "The Wire"
  ),
  "drama"
);
