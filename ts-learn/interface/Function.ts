function fn(name: string): string;
function fn(name: number): number;
function fn(name: string | number): string | number {
  return name;
}

console.log(fn(123));
console.log(fn('456'));
