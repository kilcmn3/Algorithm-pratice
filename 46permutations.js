/*
https://leetcode.com/problems/permutations/

Explanation: https://www.youtube.com/watch?v=xghJNlMibX4

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.

*/

var permute = function (nums) {
  let output = [];

  const swampInPlace = (arrToSwamp, indexA, indexB) => {
    const temp = arrToSwamp[indexA];
    arrToSwamp[indexA] = arrToSwamp[indexB];
    arrToSwamp[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }

    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swampInPlace(heapArr, i, n - 1);
      } else {
        swampInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };

  generate(nums.length, nums.slice());

  return output;
};
