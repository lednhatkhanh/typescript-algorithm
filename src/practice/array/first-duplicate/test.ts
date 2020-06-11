import { firstDuplicate } from '.';

describe('firstDuplicate()', () => {
  test('Test case 1', () => {
    expect(firstDuplicate([2, 1, 3, 5, 3, 2])).toEqual(3);
  });

  test('Test case 2', () => {
    expect(firstDuplicate([2, 2])).toEqual(2);
  });

  test('Test case 3', () => {
    expect(firstDuplicate([2, 4, 3, 5, 1])).toEqual(-1);
  });

  test('Test case 4', () => {
    expect(firstDuplicate([1])).toEqual(-1);
  });

  test('Test case 5', () => {
    expect(firstDuplicate([5, 5, 5, 5, 5])).toEqual(5);
  });

  test('Test case 6', () => {
    expect(firstDuplicate([2, 1])).toEqual(-1);
  });

  test('Test case 7', () => {
    expect(firstDuplicate([2, 1, 3])).toEqual(-1);
  });

  test('Test case 8', () => {
    expect(firstDuplicate([2, 3, 3])).toEqual(3);
  });

  test('Test case 9', () => {
    expect(firstDuplicate([3, 3, 3])).toEqual(3);
  });

  test('Test case 10', () => {
    expect(firstDuplicate([8, 4, 6, 2, 6, 4, 7, 9, 5, 8])).toEqual(6);
  });

  test('Test case 11', () => {
    expect(firstDuplicate([10, 6, 8, 4, 9, 1, 7, 2, 5, 3])).toEqual(-1);
  });

  test('Test case 12', () => {
    expect(firstDuplicate([1, 1, 2, 2, 1])).toEqual(1);
  });
});
