import { findMiddleNode } from '.';
import { ListNode } from '../utils';

describe('findMiddleNode()', () => {
  test('Test case 1', () => {
    expect(findMiddleNode(ListNode.fromArray([]))).toEqual(null);
  });

  test('Test case 2', () => {
    expect(findMiddleNode(ListNode.fromArray([2]))).toEqual(2);
  });

  test('Test case 3', () => {
    expect(findMiddleNode(ListNode.fromArray([1, 2, 3, 4, 5]))).toEqual(3);
  });

  test('Test case 4', () => {
    expect(findMiddleNode(ListNode.fromArray([1, 2]))).toEqual(2);
  });

  test('Test case 5', () => {
    expect(findMiddleNode(ListNode.fromArray([1, 2, 3, 4]))).toEqual(3);
  });
});
