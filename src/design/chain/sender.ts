import { Handler } from "./handler";
import { Order } from "./Order";

export class Sender implements Handler{

    constructor(private next?:Handler){

    }

    handle(order: Order): void {
        console.log("Sender... working")
        console.table(order);
        if(this.next){
            this.next.handle(order);
        }
    }
    


}