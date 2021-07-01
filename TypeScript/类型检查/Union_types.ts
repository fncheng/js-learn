/**
 * Union Types
 */
let numOrStr: number | string = '123';
numOrStr = 123;

function main(something: number | string): string {
  return something.toString();
}
