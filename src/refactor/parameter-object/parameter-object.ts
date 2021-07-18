export class ParameterObject {
  evaluateRollDice(dice1: number, dice2: number, dice3: number): Roll {
    if (dice1 == dice2 && dice2 == dice3) {
      return Roll.EQUAL;
    }
    if (dice1 % 2 === 0 && dice2 % 2 === 0 && dice3 % 2 === 0) {
      return Roll.PAIRS;
    }
    if (dice1 % 2 !== 0 && dice2 % 2 !== 0 && dice3 % 2 !== 0) {
      return Roll.IMPAIRS;
    }
    const dices = [dice1, dice2, dice3];
    dices.sort();
    if (
      (dices[0] - dices[1] === 1 && dices[1] - dices[2] === 1) ||
      (dices[2] - dices[1] === 1 && dices[1] - dices[0] === 1)
    ) {
      return Roll.STAIR;
    }

    return Roll.NONE;
  }
}
export enum Roll {
  PAIRS,
  STAIR,
  IMPAIRS,
  EQUAL,
  NONE,
}
