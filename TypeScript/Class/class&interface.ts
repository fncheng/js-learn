class Point {
  x: number;
  y: number;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
