export function twoSum(nums: number[], target: number): number[] {
  const numByIndex: { [key: string]: number } = {};
  for (let i = 0; i < nums.length; i += 1) {
    const left = target - nums[i];
    if (typeof numByIndex[`${left}`] !== 'undefined') {
      return [numByIndex[`${left}`], i];
    }
    numByIndex[`${nums[i]}`] = i;
  }
  // This will never happen since there will always be a pair, so ignore it from code coverage
  /* istanbul ignore next */
  return [];
}
