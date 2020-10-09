var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  var map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  var output = digits.split('').map((target) => map[target]);

  return output.reduce((acc, cum) => {
    var container = [];
    acc.map((a) => {
      return (container = container.concat(cum.map((b) => a + b)));
    });
    return container;
  });
};

console.log(letterCombinations('3'));
