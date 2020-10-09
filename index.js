var isValid = function (s) {
  var map = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  var stack = [];
  for (var i = 0; i < s.length; i++) {
    var z = s[i];
    if (map[z]) {
      stack.push(map[z]);
    } else if (z !== stack.pop()) {
      return false;
    }
  }
  return !stack.length;
};
