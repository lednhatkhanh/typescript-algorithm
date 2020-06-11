import { firstNotRepeatingCharacter } from '.';

describe('firstNotRepeatingCharacter()', () => {
  test('Test case 1', () => {
    expect(firstNotRepeatingCharacter('abacabad')).toEqual('c');
  });

  test('Test case 2', () => {
    expect(firstNotRepeatingCharacter('abacabaabacaba')).toEqual('_');
  });

  test('Test case 3', () => {
    expect(firstNotRepeatingCharacter('z')).toEqual('z');
  });

  test('Test case 4', () => {
    expect(firstNotRepeatingCharacter('bcb')).toEqual('c');
  });

  test('Test case 5', () => {
    expect(firstNotRepeatingCharacter('bcccccccb')).toEqual('_');
  });

  test('Test case 6', () => {
    expect(
      firstNotRepeatingCharacter('abcdefghijklmnopqrstuvwxyziflskecznslkjfabe'),
    ).toEqual('d');
  });

  test('Test case 7', () => {
    expect(firstNotRepeatingCharacter('zzz')).toEqual('_');
  });

  test('Test case 8', () => {
    expect(firstNotRepeatingCharacter('bcccccccccccccyb')).toEqual('y');
  });

  test('Test case 9', () => {
    expect(
      firstNotRepeatingCharacter(
        'xdnxxlvupzuwgigeqjggosgljuhliybkjpibyatofcjbfxwtalc',
      ),
    ).toEqual('d');
  });

  test('Test case 10', () => {
    expect(
      firstNotRepeatingCharacter(
        'ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof',
      ),
    ).toEqual('g');
  });
});
