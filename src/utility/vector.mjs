export class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(vector) {
    if (vector instanceof Vector)
      return Math.sqrt(Math.pow(vector.x - this.x, 2) + Math.pow(vector.y - this.y, 2));
    else return -1;
  }

  distanceXTo(vector) { 
    if (vector instanceof Vector)
      return (this.x - vector.x);
    else return null;
  }

  distanceYTo(vector) { 
    if (vector instanceof Vector)
      return (this.y - vector.y);
    else return null;
  }

  copy() {
    return new Vector(this.x, this.y);
  }

  equals(vector) {
    let e = true;
    if (vector instanceof Vector) {
      e = e && (this.x === vector.x);
      e = e && (this.y === vector.y);

      return e;
    } else return false;
  }

  equalsX(vector) {
    let e = true;
    if (vector instanceof Vector) {
      e = e && (this.x === vector.x);

      return e;
    } else return false;
  }

  equalsY(vector) {
    let e = true;
    if (vector instanceof Vector) {
      e = e && (this.y === vector.y);

      return e;
    } else return false;
  }
}