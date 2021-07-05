import { Handler } from "./handler";
import { Order } from "./Order";

export class Packer implements Handler{

    constructor(private next?:Handler){

    }

    handle(order: Order): void {
        console.log("Packer... working")
        console.table(order);
        if(this.next){
            this.next.handle(order);
        }
    }
    


}