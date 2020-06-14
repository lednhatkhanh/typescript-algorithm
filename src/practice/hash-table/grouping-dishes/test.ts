import { groupingDishes } from '.';

describe('groupingDishes()', () => {
  test('Test case 1', () => {
    expect(
      groupingDishes([
        ['Salad', 'Tomato', 'Cucumber', 'Salad', 'Sauce'],
        ['Pizza', 'Tomato', 'Sausage', 'Sauce', 'Dough'],
        ['Quesadilla', 'Chicken', 'Cheese', 'Sauce'],
        ['Sandwich', 'Salad', 'Bread', 'Tomato', 'Cheese'],
      ]),
    ).toStrictEqual([
      ['Cheese', 'Quesadilla', 'Sandwich'],
      ['Salad', 'Salad', 'Sandwich'],
      ['Sauce', 'Pizza', 'Quesadilla', 'Salad'],
      ['Tomato', 'Pizza', 'Salad', 'Sandwich'],
    ]);
  });

  test('Test case 2', () => {
    expect(
      groupingDishes([
        ['Pasta', 'Tomato Sauce', 'Onions', 'Garlic'],
        ['Chicken Curry', 'Chicken', 'Curry Sauce'],
        ['Fried Rice', 'Rice', 'Onions', 'Nuts'],
        ['Salad', 'Spinach', 'Nuts'],
        ['Sandwich', 'Cheese', 'Bread'],
        ['Quesadilla', 'Chicken', 'Cheese'],
      ]),
    ).toStrictEqual([
      ['Cheese', 'Quesadilla', 'Sandwich'],
      ['Chicken', 'Chicken Curry', 'Quesadilla'],
      ['Nuts', 'Fried Rice', 'Salad'],
      ['Onions', 'Fried Rice', 'Pasta'],
    ]);
  });

  test('Test case 3', () => {
    expect(
      groupingDishes([
        ['Pasta', 'Tomato Sauce', 'Onions', 'Garlic'],
        ['Chicken Curry', 'Chicken', 'Curry Sauce'],
        ['Fried Rice', 'Rice', 'Onion', 'Nuts'],
        ['Salad', 'Spinach', 'Nut'],
        ['Sandwich', 'Cheese', 'Bread'],
        ['Quesadilla', 'Chickens', 'Cheeseeee'],
      ]),
    ).toStrictEqual([]);
  });

  test('Test case 4', () => {
    expect(
      groupingDishes([
        ['First', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
        ['Second', 'i', 'h', 'g', 'f', 'e', 'x', 'c', 'b', 'a'],
      ]),
    ).toStrictEqual([
      ['a', 'First', 'Second'],
      ['b', 'First', 'Second'],
      ['c', 'First', 'Second'],
      ['e', 'First', 'Second'],
      ['f', 'First', 'Second'],
      ['g', 'First', 'Second'],
      ['h', 'First', 'Second'],
      ['i', 'First', 'Second'],
    ]);
  });
});
