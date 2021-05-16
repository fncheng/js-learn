const conjoin = (flock_x, flock_y) => flock_x + flock_y;
const breed = (flock_x, flock_y) => flock_x * flock_y;

const flock_a = 4,
  flock_b = 2,
  flock_c = 0;

const result = conjoin(
  breed(flock_b, conjoin(flock_a, flock_c)),
  breed(flock_a, flock_b)
);

console.log(result);
b * (a + c) + a * b;
b * a + b * c + a * b;
b * (a + a + c);
