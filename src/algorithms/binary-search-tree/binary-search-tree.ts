import { TreeNode } from './tree-node';

export class BinarySearchTree<T = number> {
  static fromArray<T>(array: (T | null)[]): BinarySearchTree<T> {
    const bst = new BinarySearchTree<T>();
    array.forEach((value) => {
      if (value !== null) {
        bst.insert(value);
      }
    });
    return bst;
  }

  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    if (!this.root) {
      this.root = new TreeNode<T>(value);
      return;
    }

    let currentNode: TreeNode<T> = this.root;
    const newNode = new TreeNode<T>(value);

    while (currentNode) {
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return;
        }
      } else if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          return;
        }
      }
    }
  }

  breadthFirstSearch(value: T): boolean {
    let valueExists = false;
    this.levelOrderTraverse((currentValue) => {
      if (value === currentValue) {
        valueExists = true;
      }
    });
    return valueExists;
  }

  levelOrderTraverse(callback: (value: T) => void): void {
    if (!this.root) {
      return;
    }

    let level = [this.root];
    while (level.length) {
      const nextLevel: TreeNode<T>[] = [];

      level.forEach((node) => {
        callback(node.value);
        if (node.left) {
          nextLevel.push(node.left);
        }
        if (node.right) {
          nextLevel.push(node.right);
        }
      });

      level = nextLevel;
    }
  }

  toArray(): T[] {
    const valuesArr: T[] = [];
    this.levelOrderTraverse((val) => valuesArr.push(val));
    return valuesArr;
  }
}
