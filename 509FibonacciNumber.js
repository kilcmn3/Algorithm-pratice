/*

https://leetcode.com/problems/fibonacci-number/

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).

Example 1:

Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

Note:

0 ≤ N ≤ 30.
*/

//method1
var fib = function (N) {
  if (N < 2) {
    return N;
  }

  let dp = {};

  if (dp[N] !== undefined) {
    return dp[N];
  } else {
    dp[N] = fib(N - 1) + fib(N - 2);
  }

  return dp[N];
};

//method2
var fibanocci = function (n) {
  if (n < 2) return n;

  let left = 0;
  let right = 1;
  let previous = left;

  for (let i = 1; i < n; i++) {
    previous = left;
    left = right;
    right = previous + right;
  }

  return right;
};

console.log(fibanocci(100));

//method3

var fib = function (N) {
  if (N < 2) {
    return N;
  }

  let dp = [0, 1];

  for (let i = 2; i <= N; i++) {
    dp.push(dp[i - 2] + dp[i - 1]);
  }

  return dp.pop();
};
