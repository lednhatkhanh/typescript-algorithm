function findMax(num: string): number {
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] !== '9') {
      return parseInt(num.replace(new RegExp(num[i], 'g'), '9'));
    }
  }

  return parseInt(num);
}

function findMin(num: string): number {
  if (num[0] !== '1') {
    return parseInt(num.replace(new RegExp(num[0], 'g'), '1'));
  }

  for (let i = 1; i < num.length; i += 1) {
    if (!'01'.includes(num[i]) && num[i] !== num[0]) {
      return parseInt(num.replace(new RegExp(num[i], 'g'), '0'));
    }
  }

  return parseInt(num);
}

export function maxDiff(num: number): number {
  const strNum = `${num}`;
  const maxNum = findMax(strNum);
  const minNum = findMin(strNum);
  return maxNum - minNum;
}
