var twoSum = function (nums, target) {
  let hash = {};
  for (var i = 0; i < nums.length; i++) {
    console.log(hash[target - nums[i]]);
    if (hash[target - nums[i]] !== undefined) {
      return [i, hash[target - nums[i]]];
    }
    hash[nums[i]] = i;
  }
  return [];
};

let nums = 6;
let target = [3, 2, 3];

console.log(twoSum(nums, target));
