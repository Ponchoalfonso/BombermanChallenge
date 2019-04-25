import { Vector } from './vector.mjs';

var bombers = 0;
var bombs = 0;
var choppers = 0;

export class Entity {
  constructor(entity) {
    this.position = new Vector(entity.getX(), entity.getY());
  }
}

export class Bomberman extends Entity{
  constructor(bomber) {
    super(bomber);
    this.id = bombers;
    bombers++;
  }
}

export class Bomb extends Entity {
  constructor(bomb) {
    super(bomb)
    this.id = bombs;
    this.timeLeft = bomb.timeLeft;
    bombs++;
  }
}

export class MeatChopper extends Entity {
  constructor(chopper) {
    super(chopper);
    this.id = choppers;
    choppers++;
  }
}