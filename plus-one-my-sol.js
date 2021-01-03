/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // let index = digits.length-1
  for (let index = digits.length - 1; index >= 0; index--) {
    // case if index is 9
    if (digits[index] === 9) {
      digits[index] = 0;
      // case if need to add new digit
      if (index - 1 === -1) {
        digits.unshift(1);
        return digits;
      }
    } else {
      // case normal addition & short circuit
      digits[index]++;
      return digits;
    }
  }
};
