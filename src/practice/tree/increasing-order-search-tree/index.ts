export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left?: TreeNode, right?: TreeNode) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

export function increasingBST(root: TreeNode | null): TreeNode | null {
  const stack: TreeNode[] = [];
  let currentNode: TreeNode | null = root;
  let resultRoot: TreeNode | null = null;
  let currentResultNode: TreeNode | null = null;

  while (currentNode || stack.length) {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      const top = stack.pop();

      if (top) {
        if (!resultRoot || !currentResultNode) {
          resultRoot = new TreeNode(top.val);
          currentResultNode = resultRoot;
        } else {
          currentResultNode.right = new TreeNode(top.val);
          currentResultNode = currentResultNode.right;
        }

        currentNode = top.right;
      }
    }
  }

  return resultRoot;
}
