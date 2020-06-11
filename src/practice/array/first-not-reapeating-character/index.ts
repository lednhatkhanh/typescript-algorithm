export function firstNotRepeatingCharacter(s: string): string {
  const map: { [key: string]: number } = {};
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    if (map[char] === undefined) {
      map[char] = i;
    } else {
      map[char] = Infinity;
    }
  }
  let char: string | undefined = undefined;
  let smallest = Infinity;
  for (const key in map) {
    if (map[key] < smallest) {
      smallest = map[key];
      char = key;
    }
  }
  return char ?? '_';
}
