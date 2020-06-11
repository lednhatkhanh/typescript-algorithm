import { largestValues, TreeNode } from '.';

describe('largestValues()', () => {
  test('Example 1', () => {
    const root = new TreeNode(
      1,
      new TreeNode(3, new TreeNode(5), new TreeNode(3)),
      new TreeNode(2, undefined, new TreeNode(9)),
    );
    expect(largestValues(root)).toStrictEqual([1, 3, 9]);
  });
});
