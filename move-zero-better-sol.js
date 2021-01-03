/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 1) {
    return nums;
  }
  for (let lastNonZero = 0, index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      let temp = nums[index];
      nums[index] = nums[lastNonZero];
      nums[lastNonZero] = temp;
      lastNonZero++;
    }
    //console.log(nums)
  }
};
