export function rotateImage(a: number[][]): number[][] {
  for (let i = 0; i < a.length / 2; i += 1) {
    for (let j = i; j < a.length - 1 - i; j += 1) {
      [a[i][j], a[j][a.length - i - 1]] = [a[j][a.length - i - 1], a[i][j]];
      [a[i][j], a[a.length - i - 1][a.length - j - 1]] = [
        a[a.length - i - 1][a.length - j - 1],
        a[i][j],
      ];
      [a[i][j], a[a.length - j - 1][i]] = [a[a.length - j - 1][i], a[i][j]];
    }
  }
  return a;
}
