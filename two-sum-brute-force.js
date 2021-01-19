var twoSum = function (nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let z = i + 1; z < nums.length; z++) {
      if (nums[i] + nums[z] === target) {
        output.push(i);
        output.push(z);
      }
    }
  }
  return output;
};
