/**
 * https://leetcode.com/problems/string-compression/
 * https://www.youtube.com/watch?v=IhJgguNiYYk
 */
var compress = function (chars) {
  var count = 0;
  for (var i = 0; i < chars.length; i++) {
    var current = chars[i];
    var next = chars[i + 1];
    if (current === next) {
      count++;
    } else {
      chars += current + String(count);
      count = 1;
    }
  }
  return chars.length < chars.length ? out : s;
};
