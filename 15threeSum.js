/*
https://leetcode.com/problems/3sum/

https://leetcode.com/problems/3sum/discuss/281302/JavaScript-with-lots-of-explanatory-comments!

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []

*/

var threeSum = function (nums) {
  // -(a+b)= c
  if (nums.length <= 2) return [];
  let result = [];

  nums.reduce((prev, next, index) => {
    let sumOfTwo = -(prev + next);
    let thirdVal = nums.findIndex((target) => target === sumOfTwo);
    let threeSum = prev + next + thirdVal === 0;
    let addNums = Math.abs(prev) + Math.abs(next) + Math.abs(thirdVal);

    if (threeSum) {
      if (thirval !== prev) {
        result.push([prev, next, sumOfTwo]);
      }
    }
    return prev;
  });
  return result;
};
