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

export function largestValues(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const maxValues: number[] = [];
  let level = [root];
  while (level.length) {
    const nextLevel: TreeNode[] = [];
    const levelValues: number[] = [];

    level.forEach((node) => {
      levelValues.push(node.val);
      if (node.left) {
        nextLevel.push(node.left);
      }
      if (node.right) {
        nextLevel.push(node.right);
      }
    });

    level = nextLevel;
    maxValues.push(Math.max(...levelValues));
  }

  return maxValues;
}
