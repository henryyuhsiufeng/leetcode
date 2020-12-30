/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let output = [];
  //determine which array is smaller
  if (nums1 < nums2) {
    intersectArrays(nums1, nums2, output);
  } else {
    intersectArrays(nums2, nums1, output);
  }
  return output;
};

function intersectArrays(smallArray, bigArray, output) {
  for (let i = 0; i < smallArray.length; i++) {
    // check if bigArray has the value & make sure output does not have dupes
    if (bigArray.includes(smallArray[i])) {
      output.push(smallArray[i]);
      bigArray.splice(bigArray.indexOf(smallArray[i]), 1);
    }
    console.log(bigArray);
  }
}
