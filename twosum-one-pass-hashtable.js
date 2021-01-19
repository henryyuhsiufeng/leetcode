/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let output = [];
  let map = {};
  //Go through array nums. Store new values and find the value - x in map
  for (let i = 0; i < nums.length; i++) {
    // search complementing value
    console.log(map[target - nums[i]]);
    if (map[target - nums[i]] !== undefined) {
      output.push(i);
      output.push(map[target - nums[i]]);
      return output;
    }
    // value does not exist
    if (map[nums[i]] === undefined) {
      map[nums[i]] = i;
    }
  }
};
