/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 1) {
    return nums;
  }
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      let iIndex = index;
      while (nums[iIndex] === 0 && iIndex < nums.length - 1) {
        iIndex++;
        //console.log('inside '+nums[iIndex]+' '+iIndex)
      }
      // console.log(nums)
      if (nums[iIndex] !== 0) {
        //console.log('inside '+nums[iIndex]+' '+iIndex)
        let temp = nums[index];
        nums[index] = nums[iIndex];
        nums[iIndex] = temp;
      }
      if (iIndex === nums.length - 1) {
        return nums;
      }
    }
    //console.log(nums)
  }
};
