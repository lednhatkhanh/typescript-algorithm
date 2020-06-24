import { threeSum } from '.';

describe('threeSum()', () => {
  test('Data set 1', () => {
    expect(threeSum([-2, 0, 0, 2, 2])).toStrictEqual([[-2, 0, 2]]);
  });

  test('Example 1', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test('Custom test case 1', () => {
    expect(threeSum([-1, 0, 1, 2, 3, -4, 5, 6, 7, 8, 9])).toStrictEqual([
      [-4, -1, 5],
      [-4, 1, 3],
      [-1, 0, 1],
    ]);
  });
});
