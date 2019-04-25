import { Direction } from '../../Runner';
import { Bomberman } from '../utility/bomberman';
import { Vector } from '../utility/vector';

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