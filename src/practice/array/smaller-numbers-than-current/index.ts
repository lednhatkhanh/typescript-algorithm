export function smallerNumbersThanCurrent(nums: number[]): number[] {
  const map = Array.from(nums)
    .sort((a, b) => (a - b > 0 ? 1 : -1))
    .reduce(
      (map, num, index) => ({
        ...map,
        // Only get the smallest index
        [`${num}`]: map[`${num}`] !== undefined ? map[num] : index,
      }),
      {} as { [key: string]: number },
    );

  return nums.map((num) => map[`${num}`]);
}
