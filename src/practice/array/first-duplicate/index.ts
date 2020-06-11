export function firstDuplicate(a: number[]): number {
  const trackMap: { [key: string]: boolean } = {};
  for (let i = 0; i < a.length; i += 1) {
    const num = a[i];
    if (!trackMap[`${num}`]) {
      trackMap[`${num}`] = true;
    } else {
      return num;
    }
  }
  return -1;
}
