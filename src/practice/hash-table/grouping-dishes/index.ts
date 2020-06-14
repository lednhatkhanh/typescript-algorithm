export function groupingDishes(dishes: string[][]): string[][] {
  const ingredientsMap: { [key: string]: string[] } = {};

  dishes.forEach(([dish, ...ingredients]) => {
    ingredients.forEach((ingredient) => {
      if (!ingredientsMap[ingredient]) {
        ingredientsMap[ingredient] = [dish];
      } else {
        ingredientsMap[ingredient].push(dish);
      }
    });
  });

  return Object.keys(ingredientsMap)
    .filter((key) => ingredientsMap[key].length > 1)
    .sort(sortLexicographically)
    .reduce(
      (arr, key) => [
        ...arr,
        [key, ...ingredientsMap[key].sort(sortLexicographically)],
      ],
      [] as string[][],
    );
}

function sortLexicographically(a: string, b: string): number {
  return a > b ? 1 : -1;
}
