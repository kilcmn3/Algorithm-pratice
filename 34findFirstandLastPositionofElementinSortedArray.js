/*  
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

Explanation: https://www.youtube.com/watch?v=bU-q1OJ0KWw

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/

var searchRange = function (nums, target) {
  let result = [];

  let startPoint = firstIndex(nums, target);
  let endPoint = lastIndex(nums, target);

  return [startPoint, endPoint];
};

function firstIndex(nums, target) {
  let index = -1;
  let start = 0;
  let end = nums.length;

  while (start <= end) {
    let middle = Math.floor(start + (end - start) / 2);

    if (nums[middle] >= target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  if (target === nums[start]) {
    index = start;
  }

  return index;
}

function lastIndex(nums, target) {
  let index = -1;
  let start = 0;
  let end = nums.length;

  while (start <= end) {
    let middle = Math.floor(start + (end - start) / 2);

    if (nums[middle] <= target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  if (target == nums[end]) {
    index = end;
  }

  return index;
}
