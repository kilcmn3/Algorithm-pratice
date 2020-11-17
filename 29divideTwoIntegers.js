/*
https://leetcode.com/problems/divide-two-integers/

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Note:

Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.
 

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.
Example 3:

Input: dividend = 0, divisor = 1
Output: 0
Example 4:

Input: dividend = 1, divisor = 1
Output: 1
 

Constraints:

-231 <= dividend, divisor <= 231 - 1
divisor != 0

*/

var divide = function (dividend, divisor) {
  //Subtract the divident  until  the remainder is smaller than divisor
  //What if divident is negative?
  //What if divisor is negative?

  //if either dividen  or divisor is negative, store the information, and at return check if the stored info
  //has negative or not

  //if both negative then is returns with positive
  let checkPoint = true;

  if (dividend < 0 || divisor < 0) {
    checkPoint = false;
    dividend = dividend < 0 ? -dividend : dividend;
    divisor = divisor < 0 ? -divisor : divisor;
  } else if (dividend < 0 && divisor < 0) {
    dividend = -dividend;
    divisor = -divisor;
  }

  let remainder = dividend - divisor;
  let count = 0;

  if (!remainder) return checkPoint ? 1 : -1;

  while (dividend && remainder > 0) {
    remainder = remainder - divisor;
    count++;
  }
  if (count > Math.pow(2, 31) - 1 || count < Math.pow(-2, 31))
    return Math.pow(2, 31) - 1;
  return checkPoint ? count : -count;
};

//Approch for this coding  with  be o(n + m)
