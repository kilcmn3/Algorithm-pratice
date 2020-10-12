//https://leetcode.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const letterWithNumber = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  digits = digits.split('').map((key) => letterWithNumber[key]);
  const output = digits.reduce(function (acc, cur) {
    let container = [];
    acc.map(function (firstElem) {
      container = container.concat(
        cur.map(function (secondElem) {
          return firstElem + secondElem;
        })
      );
    });
    return container;
  });
  return output;
};

console.log(letterCombinations('23'));
