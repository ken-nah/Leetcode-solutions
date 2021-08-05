/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numObj = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numObj[target - num] !== undefined) return [numObj[target - num], i];
    numObj[num] = i;
  }
};

// @lc code=end
