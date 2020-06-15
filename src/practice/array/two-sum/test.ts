import { twoSum } from './index';

describe('twoSum()', function () {
  test('Example 1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });

  test('Custom test case 1', () => {
    expect(twoSum([8, 6, 4, 2], 8)).toStrictEqual([1, 3]);
  });

  test('Custom test case 3', () => {
    expect(twoSum([2, 7, 20, 4, 3, 16], 23)).toStrictEqual([2, 4]);
  });

  test('Custom test case 4', () => {
    expect(twoSum([2, 7], 9)).toStrictEqual([0, 1]);
  });
});
