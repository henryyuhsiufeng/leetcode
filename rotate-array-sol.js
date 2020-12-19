/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //mod the k times with length of nums array
  let rotIndex = k % nums.length;
  //reverse the whole array
  reverse(nums, 0, nums.length - 1);
  //reverse the segmented array at rotIndex
  console.log(rotIndex);
  reverse(nums, 0, rotIndex - 1);
  reverse(nums, rotIndex, nums.length - 1);
  return nums;
};

function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
/*

Complexity Analysis

Time complexity: O(n)n. nn elements are reversed a total of three times.

Space complexity: O(1). No extra space is used.

 */
