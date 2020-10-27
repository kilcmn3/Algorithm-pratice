/*
https://leetcode.com/problems/reverse-integer/

Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1
*/

//Alt solution
var reverse = function (x) {
  const absReversed = Math.abs(x).toString().split('').reverse().join('');
  if (absReversed > 2 ** 31) return 0;
  return absReversed * Math.sign(x);
};

//My solution
var reverse = function (x) {
  if (x === 0 || x <= Math.pow(-2, 31)) return 0;

  var output = '';

  x > 0 ? (num = x) : (num = Math.abs(x));
  num = num.toString().split('');

  for (var i = num.length - 1; i > -1; i--) {
    output = output + num[i];
  }
  if (x > 0) {
    return parseInt(output) > Math.pow(2, 31) - 1 ? 0 : parseInt(output);
  } else {
    output = '-' + output;
    return parseInt(output) <= Math.pow(-2, 31) ? 0 : parseInt(output);
  }
};
