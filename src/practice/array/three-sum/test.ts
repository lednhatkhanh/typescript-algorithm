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
});
