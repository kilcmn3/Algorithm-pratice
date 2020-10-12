var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  console.log('just testing');
  return [];
};

let nums = 6;
let target = [3, 2, 3];

console.log(twoSum(nums, target));
