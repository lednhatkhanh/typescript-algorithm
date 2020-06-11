import { ListNode } from '../utils';
import { removeKFromList } from '.';

describe('removeKFromList()', () => {
  test('Test case 1', () => {
    expect(
      removeKFromList(ListNode.fromArray([3, 1, 2, 3, 4, 5]), 3),
    ).toStrictEqual(ListNode.fromArray([1, 2, 4, 5]));
  });

  test('Test case 2', () => {
    expect(
      removeKFromList(ListNode.fromArray([1, 2, 3, 4, 5, 6, 7]), 10),
    ).toStrictEqual(ListNode.fromArray([1, 2, 3, 4, 5, 6, 7]));
  });

  test('Test case 3', () => {
    expect(
      removeKFromList(ListNode.fromArray([1000, 1000]), 1000),
    ).toStrictEqual(ListNode.fromArray([]));
  });

  test('Test case 4', () => {
    expect(removeKFromList(ListNode.fromArray([]), -1000)).toStrictEqual(
      ListNode.fromArray([]),
    );
  });

  test('Test case 5', () => {
    expect(
      removeKFromList(ListNode.fromArray([123, 456, 789, 0]), 0),
    ).toStrictEqual(ListNode.fromArray([123, 456, 789]));
  });

  test('Custom test 1', () => {
    expect(
      removeKFromList(ListNode.fromArray([333, 333, 333, 333]), 333),
    ).toStrictEqual(ListNode.fromArray([]));
  });
});
