export class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T, left?: TreeNode<T>, right?: TreeNode<T>) {
    this.value = value;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}
