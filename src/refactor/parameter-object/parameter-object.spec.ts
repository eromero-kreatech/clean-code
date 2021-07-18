import { expect } from "chai";
import { ParameterObject, Roll } from "./parameter-object";

describe("evaluateRollDice", () => {
  it("shouldBeEQUALS", () => {
    const dice1 = 1;
    const dice2 = 1;
    const dice3 = 1;
    const parameterObject = new ParameterObject();
    const result = parameterObject.evaluateRollDice(dice1, dice2, dice3);
    expect(result).to.equal(Roll.EQUAL);
  });

  it("shouldBeIMPAIRS", () => {
    const dice1 = 1;
    const dice2 = 3;
    const dice3 = 5;
    const parameterObject = new ParameterObject();
    const result = parameterObject.evaluateRollDice(dice1, dice2, dice3);
    expect(result).to.equal(Roll.IMPAIRS);
  });

  it("shouldBePAIRS", () => {
    const dice1 = 2;
    const dice2 = 4;
    const dice3 = 6;
    const parameterObject = new ParameterObject();
    const result = parameterObject.evaluateRollDice(dice1, dice2, dice3);
    expect(result).to.equal(Roll.PAIRS);
  });

  it("shouldBeSTAIRAscendent", () => {
    const dice1 = 1;
    const dice2 = 2;
    const dice3 = 3;
    const parameterObject = new ParameterObject();
    const result = parameterObject.evaluateRollDice(dice1, dice2, dice3);
    expect(result).to.equal(Roll.STAIR);
  });

  it("shouldBeSTAIRDescendent", () => {
    const dice1 = 6;
    const dice2 = 5;
    const dice3 = 4;
    const parameterObject = new ParameterObject();
    const result = parameterObject.evaluateRollDice(dice1, dice2, dice3);
    expect(result).to.equal(Roll.STAIR, result.toString());
  });

  it("shouldBeSTAIRNoOrder", () => {
    const dice1 = 6;
    const dice2 = 4;
    const dice3 = 5;
    const parameterObject = new ParameterObject();
    const result = parameterObject.evaluateRollDice(dice1, dice2, dice3);
    expect(result).to.equal(Roll.STAIR, result.toString());
  });

  it("shouldBeNONE", () => {
    const dice1 = 1;
    const dice2 = 3;
    const dice3 = 6;
    const parameterObject = new ParameterObject();
    const result = parameterObject.evaluateRollDice(dice1, dice2, dice3);
    expect(result).to.equal(Roll.NONE);
  });
});
