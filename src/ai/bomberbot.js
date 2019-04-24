import { Direction } from '../../Runner';

export class Bomberbot {
  constructor (board) {
    this.board = board;
    this.bomberman = board.getBombermen();
  }

  live() {
    console.log(this.bomberman);
    return [Direction.UP];
  }

}