import { ListNode } from '../utils';
import { rearrangeLastN } from '.';

describe('rearrangeLastN()', () => {
  test('Test case 1', () => {
    expect(
      rearrangeLastN(ListNode.fromArray([1, 2, 3, 4, 5]), 3),
    ).toStrictEqual(ListNode.fromArray([3, 4, 5, 1, 2]));
  });

  test('Test case 2', () => {
    expect(
      rearrangeLastN(ListNode.fromArray([1, 2, 3, 4, 5, 6, 7]), 1),
    ).toStrictEqual(ListNode.fromArray([7, 1, 2, 3, 4, 5, 6]));
  });

  test('Test case 3', () => {
    expect(rearrangeLastN(ListNode.fromArray([1000, -1000]), 0)).toStrictEqual(
      ListNode.fromArray([1000, -1000]),
    );
  });

  test('Test case 4', () => {
    expect(rearrangeLastN(ListNode.fromArray([]), 0)).toStrictEqual(
      ListNode.fromArray([]),
    );
  });

  test('Test case 5', () => {
    expect(
      rearrangeLastN(ListNode.fromArray([123, 456, 789, 0]), 4),
    ).toStrictEqual(ListNode.fromArray([123, 456, 789, 0]));
  });
});
