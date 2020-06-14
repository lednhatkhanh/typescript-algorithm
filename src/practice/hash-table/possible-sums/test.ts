import { possibleSums } from '.';

describe('possibleSums()', () => {
  test('Test case 1', () => {
    expect(possibleSums([10, 50, 100], [1, 2, 1])).toEqual(9);
  });

  test('Test case 2', () => {
    expect(possibleSums([10, 50, 100, 500], [5, 3, 2, 2])).toEqual(122);
  });

  test('Test case 3', () => {
    expect(possibleSums([1], [5])).toEqual(5);
  });

  test('Test case 4', () => {
    expect(possibleSums([1, 1], [2, 3])).toEqual(5);
  });

  test('Test case 5', () => {
    expect(possibleSums([1, 2], [50000, 2])).toEqual(50004);
  });

  test('Test case 6', () => {
    expect(possibleSums([1, 2, 3], [2, 3, 10000])).toEqual(30008);
  });

  test('Test case 7', () => {
    expect(possibleSums([3, 1, 1], [111, 84, 104])).toEqual(521);
  });

  test('Test case 8', () => {
    expect(possibleSums([1, 1, 1, 1, 1], [9, 19, 18, 12, 19])).toEqual(77);
  });
});
