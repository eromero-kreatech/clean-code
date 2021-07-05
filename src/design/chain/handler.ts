import { Order } from "./Order";

export interface Handler{
    handle(order: Order): void;
}
