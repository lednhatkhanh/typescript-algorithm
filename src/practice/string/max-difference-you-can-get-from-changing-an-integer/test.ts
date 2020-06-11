import { maxDiff } from '.';

describe('maxDiff()', () => {
  test('Example 1', () => {
    expect(maxDiff(555)).toEqual(888);
  });

  test('Example 2', () => {
    expect(maxDiff(9)).toEqual(8);
  });

  test('Example 3', () => {
    expect(maxDiff(123456)).toEqual(820000);
  });

  test('Example 4', () => {
    expect(maxDiff(10000)).toEqual(80000);
  });

  test('Example 5', () => {
    expect(maxDiff(9288)).toEqual(8700);
  });
});
