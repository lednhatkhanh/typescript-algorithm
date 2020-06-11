import { ListNode } from '../utils';
import { isListPalindrome } from '.';

describe('isListPalindrome()', () => {
  // test('Test case 1', () => {
  //   expect(isListPalindrome(ListNode.fromArray([0, 1, 0]))).toEqual(true);
  // });

  test('Test case 2', () => {
    expect(isListPalindrome(ListNode.fromArray([1, 2, 2, 3]))).toEqual(false);
  });

  test('Test case 3', () => {
    expect(
      isListPalindrome(
        ListNode.fromArray([
          1,
          1000000000,
          -1000000000,
          -1000000000,
          1000000000,
          1,
        ]),
      ),
    ).toEqual(true);
  });

  test('Test case 4', () => {
    expect(isListPalindrome(ListNode.fromArray([1, 2, 3, 3, 2]))).toEqual(
      false,
    );
  });

  test('Test case 5', () => {
    expect(isListPalindrome(ListNode.fromArray([1, 2, 3, 1, 2, 3]))).toEqual(
      false,
    );
  });

  test('Test case 6', () => {
    expect(isListPalindrome(ListNode.fromArray([]))).toEqual(true);
  });

  test('Test case 7', () => {
    expect(isListPalindrome(ListNode.fromArray([3, 5, 3, 5]))).toEqual(false);
  });

  test('Test case 8', () => {
    expect(isListPalindrome(ListNode.fromArray([1, 5, 2, 4]))).toEqual(false);
  });

  test('Test case 9', () => {
    expect(isListPalindrome(ListNode.fromArray([10]))).toEqual(true);
  });

  test('Test case 10', () => {
    expect(isListPalindrome(ListNode.fromArray([0, 0]))).toEqual(true);
  });

  test('Test case 11', () => {
    expect(isListPalindrome(ListNode.fromArray([1, 3, 2, 2, 2]))).toEqual(
      false,
    );
  });
});
