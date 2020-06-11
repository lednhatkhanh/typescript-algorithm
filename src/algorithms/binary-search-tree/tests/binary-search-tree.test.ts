import { BinarySearchTree } from '../binary-search-tree';

describe('BinarySearchTree', () => {
  describe('levelOrderTraverse()', () => {
    test('should traverse by level', () => {
      const tree = BinarySearchTree.fromArray([
        5,
        3,
        6,
        2,
        4,
        null,
        8,
        1,
        null,
        null,
        null,
        7,
        9,
      ]);
      const searchResults: number[] = [];
      const pushToResult = (val: number) => searchResults.push(val);
      tree.levelOrderTraverse(pushToResult);
      expect(searchResults).toStrictEqual([5, 3, 6, 2, 4, 8, 1, 7, 9]);
    });
  });

  describe('breadthFirstSearch()', function () {
    test('should return true if value exists', () => {
      const tree = BinarySearchTree.fromArray([
        5,
        3,
        6,
        2,
        4,
        null,
        8,
        1,
        null,
        null,
        null,
        7,
        9,
      ]);
      expect(tree.breadthFirstSearch(2)).toEqual(true);
    });
  });

  describe('toArray()', () => {
    test('should return empty array if bst is empty', () => {
      const bst = new BinarySearchTree();
      expect(bst.toArray()).toStrictEqual([]);
    });

    test('should convert to an array of values', () => {
      const tree = BinarySearchTree.fromArray([
        5,
        3,
        6,
        2,
        4,
        null,
        8,
        1,
        null,
        null,
        null,
        7,
        9,
      ]);
      expect(tree.toArray()).toStrictEqual([5, 3, 6, 2, 4, 8, 1, 7, 9]);
    });
  });

  describe('insert()', function () {
    test('should insert new node', () => {
      const bst = new BinarySearchTree();
      expect(bst.root).toBeNull();
      [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9].forEach(
        (val) => val !== null && bst.insert(val),
      );
      expect(bst.toArray()).toStrictEqual([5, 3, 6, 2, 4, 8, 1, 7, 9]);
    });
  });
});
