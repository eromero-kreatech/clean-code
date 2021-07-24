import { Context } from "./context";
import { Email } from "./email";
import { Phone } from "./phone";
import { Sms } from "./sms";

let context;
const selected = randomSelection();
if (selected < 0.5) {
  context = new Context(new Email());
} else if (selected > 0.5 && selected < 0.2) {
  context = new Context(new Sms());
} else {
  context = new Context(new Phone());
}

console.log(context.executeStrategy("this is the message"));

function randomSelection(): number {
  const numero = Math.random();
  console.log(numero);
  return numero;
}
