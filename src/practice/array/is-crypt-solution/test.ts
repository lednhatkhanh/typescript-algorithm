import { isCryptSolution } from '.';

describe('isCryptSolution()', () => {
  test('Test case 1', () => {
    expect(
      isCryptSolution(
        ['SEND', 'MORE', 'MONEY'],
        [
          ['O', '0'],
          ['M', '1'],
          ['Y', '2'],
          ['E', '5'],
          ['N', '6'],
          ['D', '7'],
          ['R', '8'],
          ['S', '9'],
        ],
      ),
    ).toEqual(true);
  });

  test('Test case 2', () => {
    expect(
      isCryptSolution(
        ['TEN', 'TWO', 'ONE'],
        [
          ['O', '1'],
          ['T', '0'],
          ['W', '9'],
          ['E', '5'],
          ['N', '4'],
        ],
      ),
    ).toEqual(false);
  });

  test('Test case 3', () => {
    expect(
      isCryptSolution(
        ['ONE', 'ONE', 'TWO'],
        [
          ['O', '2'],
          ['T', '4'],
          ['W', '6'],
          ['E', '1'],
          ['N', '3'],
        ],
      ),
    ).toEqual(true);
  });

  test('Test case 4', () => {
    expect(
      isCryptSolution(
        ['ONE', 'ONE', 'TWO'],
        [
          ['O', '0'],
          ['T', '1'],
          ['W', '2'],
          ['E', '5'],
          ['N', '6'],
        ],
      ),
    ).toEqual(false);
  });

  test('Test case 5', () => {
    expect(isCryptSolution(['A', 'A', 'A'], [['A', '0']])).toEqual(true);
  });

  test('Test case 6', () => {
    expect(
      isCryptSolution(
        ['A', 'B', 'C'],
        [
          ['A', '5'],
          ['B', '6'],
          ['C', '1'],
        ],
      ),
    ).toEqual(false);
  });

  test('Test case 7', () => {
    expect(isCryptSolution(['AA', 'AA', 'AA'], [['A', '0']])).toEqual(false);
  });

  test('Test case 8', () => {
    expect(isCryptSolution(['A', 'A', 'A'], [['A', '1']])).toEqual(false);
  });

  test('Test case 9', () => {
    expect(
      isCryptSolution(
        ['AA', 'AA', 'BB'],
        [
          ['A', '1'],
          ['B', '2'],
        ],
      ),
    ).toEqual(true);
  });

  test('Test case 10', () => {
    expect(
      isCryptSolution(
        ['BAA', 'CAB', 'DAB'],
        [
          ['A', '0'],
          ['B', '1'],
          ['C', '2'],
          ['D', '4'],
        ],
      ),
    ).toEqual(false);
  });
});
