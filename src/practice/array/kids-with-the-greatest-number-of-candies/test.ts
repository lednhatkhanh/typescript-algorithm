import { kidsWithCandies } from './index';

describe('kidsWithCandies()', function () {
  test('Example 1', () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toStrictEqual([
      true,
      true,
      true,
      false,
      true,
    ]);
  });

  test('Example 2', () => {
    expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toStrictEqual([
      true,
      false,
      false,
      false,
      false,
    ]);
  });

  test('Example 3', () => {
    expect(kidsWithCandies([12, 1, 12], 10)).toStrictEqual([true, false, true]);
  });
});
