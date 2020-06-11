import { addTwoHugeNumbers } from '.';
import { ListNode } from '../utils';

describe('addTwoHugeNumbers', () => {
  test('Test case 1', () => {
    expect(
      addTwoHugeNumbers(
        ListNode.fromArray([9876, 5432, 1999]) as ListNode<number>,
        ListNode.fromArray([1, 8001]) as ListNode<number>,
      ),
    ).toEqual(ListNode.fromArray([9876, 5434, 0]));
  });

  test('Test case 2', () => {
    expect(
      addTwoHugeNumbers(
        ListNode.fromArray([123, 4, 5]) as ListNode<number>,
        ListNode.fromArray([100, 100, 100]) as ListNode<number>,
      ),
    ).toEqual(ListNode.fromArray([223, 104, 105]));
  });

  test('Test case 3', () => {
    expect(
      addTwoHugeNumbers(
        ListNode.fromArray([0]) as ListNode<number>,
        ListNode.fromArray([0]) as ListNode<number>,
      ),
    ).toEqual(ListNode.fromArray([0]));
  });

  test('Test case 4', () => {
    expect(
      addTwoHugeNumbers(
        ListNode.fromArray([1234, 1234, 0]) as ListNode<number>,
        ListNode.fromArray([0]) as ListNode<number>,
      ),
    ).toEqual(ListNode.fromArray([1234, 1234, 0]));
  });

  test('Test case 5', () => {
    expect(
      addTwoHugeNumbers(
        ListNode.fromArray([0]) as ListNode<number>,
        ListNode.fromArray([1234, 123, 0]) as ListNode<number>,
      ),
    ).toEqual(ListNode.fromArray([1234, 123, 0]));
  });

  test('Test case 6', () => {
    expect(
      addTwoHugeNumbers(
        ListNode.fromArray([1]) as ListNode<number>,
        ListNode.fromArray([9998, 9999, 9999, 9999, 9999, 9999]) as ListNode<
          number
        >,
      ),
    ).toEqual(ListNode.fromArray([9999, 0, 0, 0, 0, 0]));
  });

  test('Test case 7', () => {
    expect(
      addTwoHugeNumbers(
        ListNode.fromArray([1]) as ListNode<number>,
        ListNode.fromArray([9999, 9999, 9999, 9999, 9999, 9999]) as ListNode<
          number
        >,
      ),
    ).toEqual(ListNode.fromArray([1, 0, 0, 0, 0, 0, 0]));
  });

  test('Test case 8', () => {
    expect(
      addTwoHugeNumbers(
        ListNode.fromArray([8339, 4510]) as ListNode<number>,
        ListNode.fromArray([2309]) as ListNode<number>,
      ),
    ).toEqual(ListNode.fromArray([8339, 6819]));
  });

  test('Custom test case 1', () => {
    expect(
      addTwoHugeNumbers(
        ListNode.fromArray([]) as ListNode<number>,
        ListNode.fromArray([]) as ListNode<number>,
      ),
    ).toEqual(ListNode.fromArray([0]));
  });

  test('Custom test case 2', () => {
    expect(
      addTwoHugeNumbers(
        ListNode.fromArray([8457, 7623, 4455]) as ListNode<number>,
        ListNode.fromArray([4, 8676, 6579]) as ListNode<number>,
      ),
    ).toEqual(ListNode.fromArray([8462, 6300, 1034]));
  });
});
