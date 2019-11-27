const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    //     if (results[item]) {
    //       results[item] += 1;
    //     } else {
    //       results[item] = 1;
    //     }
    if (!itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      }
    } else {
      results[item] = 1;
    }
  }
  return results;
};

countOnly(firstNames, { Jason: true, Karima: true, Fang: true });
