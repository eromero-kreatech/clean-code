
/**
 * Chain of Responsibility pattern code example
 */

import { Notifier } from "./notifier";
import { Order } from "./Order";
import { Packer } from "./packer";
import { Receiver } from "./receiver";
import { Sender } from "./sender";

const chainOfResponsibility = new Receiver(new Packer(new Notifier(new Sender())));


chainOfResponsibility.handle(new Order("Identificador", 1000));
