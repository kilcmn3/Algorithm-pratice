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

/*
  @param {number[]} nums
  @return {number[][]}
 */

// Explanation of three sums https://en.wikipedia.org/wiki/3SUM#cite_note-8
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);

  let result = [];

  for (i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;

    if (nums[i] > 0) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (start < end) {
      let a = nums[i];
      let b = nums[start];
      let c = nums[end];

      if (a + b + c === 0) {
        result.push([a, b, c]);

        while (start < end && nums[start] === nums[start + 1]) start++;
        while (start < end && nums[end] === nums[end - 1]) end--;

        start = start + 1;
        end = end - 1;
      } else if (a + b + c > 0) {
        end = end - 1;
      } else {
        start = start + 1;
      }
    }
  }

  return result;
};
