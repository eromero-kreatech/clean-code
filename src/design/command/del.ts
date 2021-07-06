import { Command } from "./command";

export class Del extends Command{
    
    execute(number: number): void {
        this.backup = this.receiver;
        this.receiver.sign = "-";
        this.receiver.count  = this.receiver.count - number; 
    }

}