import { ListNode } from '../utils';
import { reverseNodesInKGroups } from '.';

describe('reverseNodesInKGroups()', () => {
  test('Test case 1', () => {
    expect(
      reverseNodesInKGroups(ListNode.fromArray([1, 2, 3, 4, 5]), 2),
    ).toStrictEqual(ListNode.fromArray([2, 1, 4, 3, 5]));
  });

  test('Test case 2', () => {
    expect(
      reverseNodesInKGroups(ListNode.fromArray([1, 2, 3, 4, 5]), 1),
    ).toStrictEqual(ListNode.fromArray([1, 2, 3, 4, 5]));
  });

  test('Test case 3', () => {
    expect(
      reverseNodesInKGroups(
        ListNode.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
        3,
      ),
    ).toStrictEqual(ListNode.fromArray([3, 2, 1, 6, 5, 4, 9, 8, 7, 10, 11]));
  });
});
