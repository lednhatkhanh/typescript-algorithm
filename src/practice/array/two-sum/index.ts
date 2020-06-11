export function twoSum(nums: number[], target: number): number[] {
  const indexMap = nums.reduce(
    (currentIndexMap, num, index) => ({
      ...currentIndexMap,
      [`${num}`]: index,
    }),
    {} as { [key: string]: number },
  );

  for (let index = 0; index < nums.length; index += 1) {
    const left = target - nums[index];
    const leftIndex = indexMap[`${left}`] as number | undefined;
    if (typeof leftIndex === 'number' && leftIndex !== index) {
      return [index, leftIndex];
    }
  }

  return [];
}
