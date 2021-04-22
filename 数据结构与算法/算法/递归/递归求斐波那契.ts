// function fibonacci(n: number): number {
//   if (n < 1) return 0; // {1}
//   if (n <= 2) return 1; // {2}
//   return fibonacci(n - 1) + fibonacci(n - 2); // {3}
// }

function fibonacciMemoization(n: number): number {
  const memo: number[] = [0, 1]; // {1}
  const fibonacci = (n: number, memo: Array<number>) => {
    if (memo[n] != null) return memo[n]; // {2}
    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)); // {3}
  };
  return fibonacci(n, memo);
}

console.log(fibonacciMemoization(5));
