import { TreeNode, findBottomLeftValue } from '.';

describe('findBottomLeftValue()', () => {
  test('Example 1', () => {
    expect(
      findBottomLeftValue(new TreeNode(2, new TreeNode(1), new TreeNode(3))),
    ).toEqual(1);
  });

  test('Example 2', () => {
    expect(
      findBottomLeftValue(
        new TreeNode(
          1,
          new TreeNode(2, new TreeNode(4)),
          new TreeNode(3, new TreeNode(5, new TreeNode(7)), new TreeNode(6)),
        ),
      ),
    ).toEqual(7);
  });
});
