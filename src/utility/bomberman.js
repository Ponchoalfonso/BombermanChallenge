import { Vector } from './vector';

var count = 0;

export class Bomberman {

  constructor(bomber) {
    this.position = new Vector(bomber.getX(), bomber.getY());
    this.id = count;
    count++;
  }
}