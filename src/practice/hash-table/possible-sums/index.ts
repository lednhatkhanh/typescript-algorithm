export function possibleSums(coins: number[], quantity: number[]): number {
  const allSums = new Set<number>();
  for (let i = 0; i < coins.length; i += 1) {
    let sum = 0;
    const currentSums = [];
    for (let j = 0; j < quantity[i]; j += 1) {
      sum += coins[i];
      currentSums.push(sum);
      for (const k of allSums) {
        currentSums.push(sum + k);
      }
    }
    currentSums.forEach((currentSum) => allSums.add(currentSum));
  }
  return allSums.size;
}
