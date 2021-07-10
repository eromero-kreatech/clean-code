import { Strategy } from "./strategy";

export class Context {
  constructor(public strategy: Strategy) {}

  executeStrategy(message: string) {
    return this.strategy.notify(message);
  }
}
