const countOnly = function(sentence) {
  let objectOfLetters = {};
  let noSpace = sentence.replace(/ /g, "");
  for (const letter of noSpace) {
    if (objectOfLetters[letter]) {
      objectOfLetters[letter] += 1;
    } else {
      objectOfLetters[letter] = 1;
    }
  }
  return objectOfLetters;
};

countOnly("lighthouse in the house");
