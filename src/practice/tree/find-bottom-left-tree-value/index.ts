export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function findBottomLeftValue(root: TreeNode): number {
  let level: TreeNode[] = [root];
  const levels: TreeNode[][] = [[root]];

  while (level.length) {
    const nextLevel: TreeNode[] = [];

    level.forEach((node) => {
      if (node.left) {
        nextLevel.push(node.left);
      }

      if (node.right) {
        nextLevel.push(node.right);
      }
    });

    levels.push(nextLevel);
    level = nextLevel;
  }

  return levels[levels.length - 2][0].val;
}
