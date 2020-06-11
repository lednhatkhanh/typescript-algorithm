export function isCryptSolution(crypt: string[], solution: [string, string][]) {
  const solutionMap = solution.reduce(
    (map, [char, value]) => ({ ...map, [char]: value }),
    {} as { [key: string]: string },
  );
  let sum = 0;
  for (let i = 0; i < crypt.length; i += 1) {
    const word = crypt[i].split('');
    if (word.length > 1 && solutionMap[word[0]] === '0') {
      return false;
    }

    const wordSum = parseInt(
      word.reduce((charSum, char) => charSum + solutionMap[char], ''),
    );
    if (i < crypt.length - 1) {
      sum += wordSum;
    } else {
      if (sum !== wordSum) {
        return false;
      }
    }
  }
  return true;
}
