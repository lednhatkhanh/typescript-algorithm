import { TreeNode } from '../tree-node';

describe('TreeNode', () => {
  test('should init a new node', () => {
    const node = new TreeNode(4);
    expect(node.value).toEqual(4);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  test('should add left node', () => {
    const node = new TreeNode(5);
    const leftNode = new TreeNode(3);
    node.left = leftNode;
    expect(node.left).toStrictEqual(leftNode);
  });

  test('should add right node', () => {
    const node = new TreeNode(5);
    const rightNode = new TreeNode(7);
    node.right = rightNode;
    expect(node.right).toStrictEqual(rightNode);
  });
});
