import { isOneBitCharacter } from '.';

describe('isOneBitCharacter()', () => {
  test('Example 1', () => {
    expect(isOneBitCharacter([1, 0, 0])).toEqual(true);
  });

  test('Data set 1', () => {
    expect(isOneBitCharacter([0])).toEqual(true);
  });

  test('Example 2', () => {
    expect(isOneBitCharacter([1, 1, 1, 0])).toEqual(false);
  });

  test('Data set 2', () => {
    expect(isOneBitCharacter([1, 0])).toEqual(false);
  });

  test('Data set 3', () => {
    expect(isOneBitCharacter([1, 0, 1, 0])).toEqual(false);
  });
});
