import { Context } from "./context";
import { Email } from "./email";
import { Sms } from "./sms";
import { Strategy } from "./strategy";

const notifiers: Strategy[] = [new Email(), new Sms()];

let context;
const selected = randomSelection();
if (selected > 0.5) {
  context = new Context(new Email());
} else {
  context = new Context(new Sms());
}

console.log(context.executeStrategy("this is the message"));

function randomSelection(): number {
  return Math.random();
}
