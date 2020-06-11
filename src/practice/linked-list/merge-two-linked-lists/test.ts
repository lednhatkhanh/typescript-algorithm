import { ListNode } from '../utils';
import { mergeTwoLinkedLists } from '.';

describe('mergeTwoLinkedLists()', () => {
  test('Test case 1', () => {
    expect(
      mergeTwoLinkedLists(
        ListNode.fromArray([1, 2, 3]),
        ListNode.fromArray([4, 5, 6]),
      ),
    ).toStrictEqual(ListNode.fromArray([1, 2, 3, 4, 5, 6]));
  });

  test('Test case 2', () => {
    expect(
      mergeTwoLinkedLists(
        ListNode.fromArray([1, 1, 2, 4]),
        ListNode.fromArray([0, 3, 5]),
      ),
    ).toStrictEqual(ListNode.fromArray([0, 1, 1, 2, 3, 4, 5]));
  });

  test('Test case 3', () => {
    expect(
      mergeTwoLinkedLists(
        ListNode.fromArray([5, 10, 15, 40]),
        ListNode.fromArray([2, 3, 20]),
      ),
    ).toStrictEqual(ListNode.fromArray([2, 3, 5, 10, 15, 20, 40]));
  });

  test('Test case 4', () => {
    expect(
      mergeTwoLinkedLists(
        ListNode.fromArray([1, 1]),
        ListNode.fromArray([2, 4]),
      ),
    ).toStrictEqual(ListNode.fromArray([1, 1, 2, 4]));
  });

  test('Test case 5', () => {
    expect(
      mergeTwoLinkedLists(
        ListNode.fromArray([]),
        ListNode.fromArray([1, 1, 2, 2, 4, 7, 7, 8]),
      ),
    ).toStrictEqual(ListNode.fromArray([1, 1, 2, 2, 4, 7, 7, 8]));
  });

  test('Test case 6', () => {
    expect(
      mergeTwoLinkedLists(ListNode.fromArray([]), ListNode.fromArray([])),
    ).toStrictEqual(ListNode.fromArray([]));
  });

  test('Test case 7', () => {
    expect(
      mergeTwoLinkedLists(
        ListNode.fromArray([1, 1, 4]),
        ListNode.fromArray([]),
      ),
    ).toStrictEqual(ListNode.fromArray([1, 1, 4]));
  });

  test('Test case 8', () => {
    expect(
      mergeTwoLinkedLists(ListNode.fromArray([1, 1]), ListNode.fromArray([0])),
    ).toStrictEqual(ListNode.fromArray([0, 1, 1]));
  });

  test('Test case 9', () => {
    expect(
      mergeTwoLinkedLists(ListNode.fromArray([0]), ListNode.fromArray([2])),
    ).toStrictEqual(ListNode.fromArray([0, 2]));
  });

  test('Test case 10', () => {
    expect(
      mergeTwoLinkedLists(
        ListNode.fromArray([1]),
        ListNode.fromArray([-1000000000, 1000000000]),
      ),
    ).toStrictEqual(ListNode.fromArray([-1000000000, 1, 1000000000]));
  });

  test('Test case 11', () => {
    expect(
      mergeTwoLinkedLists(
        ListNode.fromArray([-1, -1, 0, 1]),
        ListNode.fromArray([-1, 0, 0, 1, 1]),
      ),
    ).toStrictEqual(ListNode.fromArray([-1, -1, -1, 0, 0, 0, 1, 1, 1]));
  });

  test('Test case 12', () => {
    expect(
      mergeTwoLinkedLists(
        ListNode.fromArray([
          -780990573,
          -670826849,
          -404817961,
          242026249,
          731519938,
        ]),
        ListNode.fromArray([-815817641, -426491047, 437929670, 520408640]),
      ),
    ).toStrictEqual(
      ListNode.fromArray([
        -815817641,
        -780990573,
        -670826849,
        -426491047,
        -404817961,
        242026249,
        437929670,
        520408640,
        731519938,
      ]),
    );
  });
});
