const Flock = function (n) {
  this.seagulls = n;
};

Flock.prototype.conjoin = function (other) {
  this.seagulls += other.seagulls;
  return this;
};

Flock.prototype.breed = function (other) {
  this.seagulls = this.seagulls * other.seagulls;
  return this;
};

const flock_a = new Flock(4);
const flock_b = new Flock(2);
const flock_c = new Flock(0);

const result = flock_a
  .conjoin(flock_c)
  .breed(flock_b)
  .conjoin(flock_a.breed(flock_b)).seagulls;
console.log(result);
