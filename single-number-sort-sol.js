/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort();
  let i = 0;
  // console.log(nums)
  while (i < nums.length) {
    let z = i;
    // loop through duplicates if any
    while (nums[i] === nums[z + 1]) {
      z++;
    }
    // if index never changed that means it is a single num
    if (i === z) {
      return nums[i];
    }
    // move i to the next new number
    i = z + 1;
  }
};
