function fibonacciIterative(n: number): number {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let fibNMinus2: number = 0;
  let fibNMinus1: number = 1;
  let fibN: number = n;
  for (let i = 2; i <= n; i++) {
    // n>=2
    fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
}
console.log(fibonacciIterative(5));
