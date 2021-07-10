/**
 * Command pattern
 */

import { Invoker } from "./invoker";
import { Receiver } from "./receiver";

const calculator = new Invoker(new Receiver(0));
calculator.add(1);
calculator.add(2);
calculator.add(3);
calculator.delete(3);
calculator.rollback();
calculator.rollback();
calculator.rollback();
