import { sudoku2 } from '.';

describe('sudoku2()', () => {
  test('Test case 1', () => {
    expect(
      sudoku2([
        ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.'],
      ]),
    ).toEqual(true);
  });

  test('Test case 2', () => {
    expect(
      sudoku2([
        ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.'],
      ]),
    ).toEqual(false);
  });

  test('Test case 3', () => {
    expect(
      sudoku2([
        ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
        ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
        ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
        ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ]),
    ).toEqual(false);
  });

  test('Test case 4', () => {
    expect(
      sudoku2([
        ['.', '.', '.', '.', '.', '.', '.', '.', '2'],
        ['.', '.', '.', '.', '.', '.', '6', '.', '.'],
        ['.', '.', '1', '4', '.', '.', '8', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '3', '.', '.', '.', '.'],
        ['5', '.', '8', '6', '.', '.', '.', '.', '.'],
        ['.', '9', '.', '.', '.', '.', '4', '.', '.'],
        ['.', '.', '.', '.', '5', '.', '.', '.', '.'],
      ]),
    ).toEqual(true);
  });

  test('Test case 5', () => {
    expect(
      sudoku2([
        ['.', '9', '.', '.', '4', '.', '.', '.', '.'],
        ['1', '.', '.', '.', '.', '.', '6', '.', '.'],
        ['.', '.', '3', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
        ['3', '.', '.', '.', '5', '.', '.', '.', '.'],
        ['.', '.', '7', '.', '.', '4', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '7', '.', '.', '.', '.'],
      ]),
    ).toEqual(true);
  });

  test('Test case 6', () => {
    expect(
      sudoku2([
        ['7', '.', '.', '.', '4', '.', '.', '.', '.'],
        ['.', '.', '.', '8', '6', '5', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '9', '.', '.', '.'],
        ['.', '.', '.', '.', '5', '.', '5', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ]),
    ).toEqual(false);
  });

  test('Test case 7', () => {
    expect(
      sudoku2([
        ['.', '4', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '1', '.', '.', '7', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '3', '.', '.', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '6', '.', '9', '.'],
        ['.', '.', '.', '.', '1', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
        ['.', '.', '.', '8', '.', '.', '.', '.', '.'],
      ]),
    ).toEqual(false);
  });

  test('Test case 8', () => {
    expect(
      sudoku2([
        ['.', '.', '5', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '8', '.', '.', '.', '3', '.'],
        ['.', '5', '.', '.', '2', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '4', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '7'],
        ['.', '1', '.', '.', '.', '.', '.', '.', '.'],
        ['2', '4', '.', '.', '.', '.', '9', '.', '.'],
      ]),
    ).toEqual(false);
  });

  test('Test case 9', () => {
    expect(
      sudoku2([
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '9', '.', '.', '.', '.', '.', '.', '1'],
        ['8', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '9', '9', '3', '5', '7', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '4', '.'],
        ['.', '.', '.', '8', '.', '.', '.', '.', '.'],
        ['.', '1', '.', '.', '.', '.', '4', '.', '9'],
        ['.', '.', '.', '5', '.', '4', '.', '.', '.'],
      ]),
    ).toEqual(false);
  });

  test('Test case 10', () => {
    expect(
      sudoku2([
        ['.', '.', '.', '2', '.', '.', '6', '.', '.'],
        ['.', '.', '.', '1', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '1', '.', '.', '8'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '9', '.', '.', '.', '.', '3'],
        ['4', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '3', '8', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '4'],
      ]),
    ).toEqual(true);
  });

  test('Test case 11', () => {
    expect(
      sudoku2([
        ['.', '.', '.', '.', '8', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '5', '.', '.'],
        ['.', '.', '.', '.', '4', '.', '.', '2', '.'],
        ['.', '.', '.', '3', '.', '9', '.', '.', '.'],
        ['.', '.', '1', '8', '.', '.', '9', '.', '.'],
        ['.', '.', '.', '.', '.', '5', '1', '.', '.'],
        ['.', '.', '3', '.', '.', '8', '.', '.', '.'],
        ['.', '1', '2', '.', '3', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '1'],
      ]),
    ).toEqual(true);
  });

  test('Test case 12', () => {
    expect(
      sudoku2([
        ['.', '.', '.', '.', '.', '.', '5', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['9', '3', '.', '.', '2', '.', '4', '.', '.'],
        ['.', '.', '7', '.', '.', '.', '3', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '3', '4', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '3', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '5', '2', '.', '.'],
      ]),
    ).toEqual(false);
  });

  test('Test case 13', () => {
    expect(
      sudoku2([
        ['.', '.', '.', '.', '4', '.', '9', '.', '.'],
        ['.', '.', '2', '1', '.', '.', '3', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '3'],
        ['.', '.', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '6', '1', '.', '.', '.', '.'],
        ['.', '.', '9', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '9', '.'],
      ]),
    ).toEqual(true);
  });

  test('Test case 14', () => {
    expect(
      sudoku2([
        ['.', '8', '7', '6', '5', '4', '3', '2', '1'],
        ['2', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['3', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['4', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['5', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['6', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['8', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['9', '.', '.', '.', '.', '.', '.', '.', '.'],
      ]),
    ).toEqual(true);
  });

  test('Test case 15', () => {
    expect(
      sudoku2([
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['4', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '6', '.', '.'],
        ['.', '.', '.', '3', '8', '.', '.', '.', '.'],
        ['.', '5', '.', '.', '.', '6', '.', '.', '1'],
        ['8', '.', '.', '.', '.', '.', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '7', '.', '9', '.', '.', '.', '.'],
        ['.', '.', '.', '6', '.', '.', '.', '.', '.'],
      ]),
    ).toEqual(true);
  });

  test('Test case 16', () => {
    expect(
      sudoku2([
        ['.', '.', '.', '.', '.', '.', '.', '.', '1'],
        ['.', '.', '.', '.', '.', '6', '.', '.', '.'],
        ['4', '.', '.', '.', '.', '.', '3', '8', '.'],
        ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '5', '3', '.', '.', '.'],
        ['.', '.', '.', '.', '6', '8', '.', '.', '.'],
        ['3', '.', '.', '9', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '2', '1', '1', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ]),
    ).toEqual(false);
  });

  test('Test case 17', () => {
    expect(
      sudoku2([
        ['.', '8', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '2', '.', '.', '.', '.'],
        ['.', '6', '.', '.', '.', '.', '1', '.', '4'],
        ['.', '.', '.', '9', '.', '.', '7', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '4', '.'],
        ['.', '.', '1', '.', '.', '8', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '5', '.', '7', '.'],
        ['.', '.', '3', '.', '.', '5', '6', '.', '.'],
      ]),
    ).toEqual(false);
  });

  test('Test case 18', () => {
    expect(
      sudoku2([
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '2', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '2', '7', '1', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '5', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '9', '.', '.', '.', '8'],
        ['.', '.', '.', '.', '.', '1', '6', '.', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
      ]),
    ).toEqual(true);
  });

  test('Test case 19', () => {
    expect(
      sudoku2([
        ['.', '.', '.', '9', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '3', '.', '.', '.', '.', '.', '1'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['1', '.', '.', '.', '.', '.', '3', '.', '.'],
        ['.', '.', '.', '.', '2', '.', '6', '.', '.'],
        ['.', '9', '.', '.', '.', '.', '.', '7', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['8', '.', '.', '8', '.', '.', '.', '.', '.'],
      ]),
    ).toEqual(false);
  });

  test('Test case 20', () => {
    expect(
      sudoku2([
        ['.', '.', '.', '.', '.', '.', '8', '3', '.'],
        ['2', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['7', '.', '.', '.', '.', '7', '.', '9', '5'],
        ['.', '.', '.', '1', '.', '.', '.', '.', '2'],
        ['.', '8', '.', '9', '.', '.', '.', '.', '.'],
        ['.', '.', '5', '1', '9', '.', '.', '.', '.'],
        ['5', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ]),
    ).toEqual(false);
  });
});