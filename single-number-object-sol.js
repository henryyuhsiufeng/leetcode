/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] === undefined ? 1 : map[nums[i]] + 1;
  }
  return Object.keys(map).find((key) => map[key] === 1);
  console.log(map);
};
