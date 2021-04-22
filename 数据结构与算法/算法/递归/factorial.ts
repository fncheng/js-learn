function factorial(number: number): number {
  if (number < 0) return undefined;
  let total: number = 1;
  for (let i = number; i > 1; i--) {
    total = total * i;
  }
  return total;
}

console.log(factorial(6));
