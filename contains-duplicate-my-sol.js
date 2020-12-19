/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    // if map has already stored num value break and return
    if (map[nums[i]] !== undefined) {
      return true;
    }
    // add to map if first occurence of val
    map[nums[i]] = 1;
  }
  return false;
};
