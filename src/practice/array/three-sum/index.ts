export function threeSum(nums: number[]): number[][] {
  // Sort the array ascending first
  nums.sort((a, b) => (a > b ? 1 : -1));
  const results: number[][] = [];

  // Go from 0 to nums.length - 2 since we will 3 variables
  for (let i = 0; i < nums.length - 2; i += 1) {
    // Since the array was sorted, if nums[i] > 0 then we can stop here
    if (nums[i] > 0) {
      return results;
    }

    // This is to remove duplicated values, Ex: -1, -1, 0, ...
    // if nums[i - 1] === nums[i] then we skip this iteration
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }

    let nextI = i + 1;
    let lastI = nums.length - 1;
    // Make the sweep, starting from i to end, and end to i
    while (nextI < lastI) {
      const sum = nums[i] + nums[nextI] + nums[lastI];
      if (sum === 0) {
        results.push([nums[i], nums[nextI], nums[lastI]]);
        while (nextI < lastI && nums[nextI] === nums[nextI + 1]) {
          nextI += 1;
        }
        while (nextI < lastI && nums[lastI] === nums[lastI - 1]) {
          lastI -= 1;
        }
        lastI -= 1;
        nextI += 1;
      } else if (sum > 0) {
        // Sum is too big, decrease lastI to decrease the sum
        lastI -= 1;
      } else {
        // Sum too small, increase nextI to increase the sum
        nextI += 1;
      }
    }
  }

  return results;
}
