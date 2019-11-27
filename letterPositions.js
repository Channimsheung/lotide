const letterPositions = function(sentence) {
  const results = {};
  let array = [];
  let results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (results[letter]) {
      results[letter];
    } else {
      results[letter] = [];
    }
    if (sentence[i]) {
      results[letter].push(i);
    } else if (sentence[i] === " ") {
    }
  }
  delete results(" ");
  //logic to update results here
  return results;
};

const assertArraysEqual = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      console.log(`Assertion Passed: True`);
    } else {
      console.log(`Assertion Failed: False`);
    }
  }
};

// assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);

const eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      console.log(`this is false`);
    } else {
      console.log(`this is true`);
    }
  }
};

// eqArrays(letterPositions("lighthouse in the house").l,[0])
