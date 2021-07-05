import { Handler } from "./handler";
import { Order } from "./Order";

export class Receiver implements Handler{

    constructor(private next?:Handler){

    }

    handle(order: Order): void {
        console.log("Receiver... working")
        console.table(order);
        if(this.next){
            this.next.handle(order);
        }
    }
    


}