import { increasingBST, TreeNode } from './index';

describe('increasingBTS()', function () {
  test('Example 1', () => {
    const leftBranch = new TreeNode(
      3,
      new TreeNode(2, new TreeNode(1)),
      new TreeNode(4),
    );
    const rightBranch = new TreeNode(
      6,
      undefined,
      new TreeNode(8, new TreeNode(7), new TreeNode(9)),
    );
    const root = new TreeNode(5, leftBranch, rightBranch);

    const expectedResult = new TreeNode(
      1,
      undefined,
      new TreeNode(
        2,
        undefined,
        new TreeNode(
          3,
          undefined,
          new TreeNode(
            4,
            undefined,
            new TreeNode(
              5,
              undefined,
              new TreeNode(
                6,
                undefined,
                new TreeNode(
                  7,
                  undefined,
                  new TreeNode(8, undefined, new TreeNode(9)),
                ),
              ),
            ),
          ),
        ),
      ),
    );

    expect(increasingBST(root)).toStrictEqual(expectedResult);
  });
});
