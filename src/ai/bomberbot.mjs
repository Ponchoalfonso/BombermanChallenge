import { Direction } from '../../Runner.mjs';
import { Bomberman, Bomb, MeatChopper, Entity } from '../utility/bomberman.mjs';
import { Vector } from '../utility/vector.mjs';

export class Bomberbot extends Bomberman {

  constructor (board) {
    super(board.getBomberman());
    this.board = board;

    this.bombs = [];
    this.barriers = [];
    this.destrayableWalls = []; 
    const bombs = board.getTimedBombs();
    const dWalls = board.getDestroyableWalls();
    const barriers = board.getBarriers();

    this.bombermen = Array.from(board.getBombermen(), (bomber, i) => new Bomberman(bomber));
    this.bombermen.shift();

    this.choppers = Array.from(board.getMeatChoppers(), (chopper, i) => new MeatChopper(chopper));

    if(bombs !== undefined) 
      this.bombs = Array.from(bombs, (bomb, i) => new Bomb(bomb));
    if (dWalls !== undefined)
      this.destrayableWalls = Array.from(dWalls, (dWall) => new Entity(dWall));
    if (barriers !== undefined)
      this.barriers = Array.from(barriers, barrier => new Entity(barrier));
  }

  get blockedWays() {
    const ways = [0, 0, 0, 0];
      if (this.board.isBarrierAt(this.position.x + 1, this.position.y))
        ways[0] = 1;
      if (this.board.isBarrierAt(this.position.x, this.position.y + 1))
        ways[1] = 1;
      if (this.board.isBarrierAt(this.position.x - 1, this.position.y))
        ways[2] = 1;
      if (this.board.isBarrierAt(this.position.x, this.position.y - 1))
        ways[3] = 1;

    return ways;
  }

  get nearestWall() {
    let mywall = null;
    let distance = -1;
    
    for (const wall of this.destrayableWalls) {
      const d = this.position.distanceTo(wall.position);
      if (distance === -1) {
        distance = d;
        mywall = wall;
      }        
      else if (d < distance) {
        distance = d;
        mywall = wall;
      }
    }

    return mywall;
  }

  walk() {
    const blockedWays = this.blockedWays;
    if (blockedWays[0] === 0)
      return Direction.RIGHT;
    else if(blockedWays[1] === 0)
      return Direction.UP;
    else if(blockedWays[2] === 0)
      return Direction.LEFT;
    else if(blockedWays[3] === 0)
      return Direction.DOWN;
    else return Direction.ACT;
  }

  walkTo(position) {
    const blockedWays = this.blockedWays;

    // Walking on X axis
    if (this.position.distanceXTo(position) > 1) {
      if (blockedWays[0] === 0)
        return Direction.RIGHT;
      else if (this.position.distanceYTo(position) > 1 && blockedWays[1])
        return Direction.UP;
      else if (this.position.distanceYTo(position) < 1 && blockedWays[3])
        return Direction.DOWN;
    } else if (this.position.distanceXTo(position) < 1) {
      if (blockedWays[2] === 0)
        return Direction.LEFT;
      else if (this.position.distanceYTo(position) > 1 && blockedWays[1])
        return Direction.UP;
      else if (this.position.distanceYTo(position) < 1 && blockedWays[3])
        return Direction.DOWN;
    }

    // Walking on Y axis
    if (this.position.distanceYTo(position) > 1) {
      if (blockedWays[1] === 0)
        return Direction.UP;
      else if (this.position.distanceXTo(position) > 1 && blockedWays[0])
        return Direction.RIGHT;
      else if (this.position.distanceXTo(position) < 1 && blockedWays[2])
        return Direction.LEFT;
    } else if (this.position.distanceYTo(position) < 1) {
      if (blockedWays[3] === 0)
        return Direction.DOWN;
      else if (this.position.distanceXTo(position) > 1 && blockedWays[0])
        return Direction.RIGHT;
      else if (this.position.distanceXTo(position) < 1 && blockedWays[2])
        return Direction.LEFT;
    } else return Direction.ACT;
  }

  live() {
    let result = [];
    if (this.nearestWall !== null) {
      if(this.nearestWall.position.distanceTo(this.position) <= 3)
        result.push(Direction.ACT); 
    }
    
    result.push(this.walk());
    console.log(result);
    return result;
  }

}