/**
 * - First find the max candies
 * - Iterate through the array, if the kid's candies plus the extra candies is equal to or larger than max candies,
 * return true, otherwise return false
 * @param candies Candies of each kid
 * @param extraCandies Extra candies to distribute
 */
export function kidsWithCandies(
  candies: number[],
  extraCandies: number,
): boolean[] {
  const maxCandies = candies.reduce(
    (max, currentCandies) => (currentCandies > max ? currentCandies : max),
    0,
  );
  return candies.map(
    (currentCandies) => currentCandies + extraCandies >= maxCandies,
  );
}
