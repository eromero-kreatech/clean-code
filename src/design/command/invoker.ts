import { Command } from "./command";
import { Del } from "./del";
import { Receiver } from "./receiver";
import { Sum } from "./sum";

export class Invoker{

    private history: Command[];

    constructor(private receiver: Receiver){
        this.history = [];
    }

    add(number:number){
        const command = new Sum(this.receiver);
        this.history.push(command);
        command.execute(number);
        this.printStatus();
    }

    delete(number:number){
        const command = new Del(this.receiver);
        this.history.push(command);
        command.execute(number)
        this.printStatus();
    }

    rollback(){
        const action = this.history.pop();
        if(action){
            this.receiver = action.undo();
        }
        this.printStatus();
    }

    private printStatus(){
        console.log(`operation ${this.receiver.sign} result ${this.receiver.count}`)
    }

    printHistory(){
        this.history.forEach(com => {
                console.table(com.backup)
            } 
        )
    }
}