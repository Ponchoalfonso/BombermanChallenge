import { Direction } from '../../Runner.mjs';
import { Bomberman } from '../utility/bomberman.mjs';
import { Vector } from '../utility/vector.mjs';

export class Bomberbot extends Bomberman {

  constructor (board) {
    super(board.getBomberman());

    this.board = board;
    this.bombermen = Array.from(board.getBombermen(), (bomber, i) => new Bomberman(bomber));
    this.bombermen.shift();
  }

  live() {
    return [Direction.ACT, Direction.RIGHT];
  }

}