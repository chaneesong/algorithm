/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let red = 0;
  let white = 0;
  let blue = nums.length;

  while (white < blue) {
    if (nums[white] < 1) {
      const tmp = nums[white];
      nums[white] = nums[red];
      nums[red] = tmp;
      white++;
      red++;
    } else if (nums[white] > 1) {
      blue--;
      const tmp = nums[blue];
      nums[blue] = nums[white];
      nums[white] = tmp;
    } else {
      white++;
    }
  }
};
