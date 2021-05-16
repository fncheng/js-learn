const validArticles = (articles) =>
  articles.filter((article) => article !== null && article !== undefined);

console.log(validArticles([1, null, 2, undefined, , 3, 4, 5]));

const compact = (xs) => xs.filter((x) => x !== null && x !== undefined);
console.log(compact([1, null, 2, undefined, , 3, 4, 5]));
