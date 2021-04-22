// function factorial(number: number): number {
//   if (number < 0) return undefined;
//   let total: number = 1;
//   for (let i = number; i > 1; i--) {
//     total = total * i;
//   }
//   return total;
// }

function factorial(number: number): number {
  console.trace();
  if (number < 0) return undefined;
  if (number === 1 || number === 0) return 1;
  return number * factorial(number - 1);
}
console.log(factorial(6));
