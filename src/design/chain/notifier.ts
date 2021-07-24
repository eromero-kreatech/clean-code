import { Handler } from "./handler";
import { Order } from "./Order";

export class Notifier implements Handler {
  constructor(private next?: Handler) {}

  handle(order: Order): void {
    console.log("Notifier... working");
    if (order.error) {
      console.error("Pare la ejecucion");
    } else {
      console.table(order);
      if (this.next) {
        this.next.handle(order);
      }
    }
  }
}
