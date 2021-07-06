import { Receiver } from "./receiver";


export abstract class Command {

    private _backup: Receiver;

    constructor(public receiver: Receiver) {
        this._backup = new Receiver(0);
    }

    set backup(_backupData: Receiver) {
        this._backup =  _backupData.clone()
    }

    get backup() : Receiver {
        return this._backup;
    } 

    undo(): Receiver {
        console.log(`Undo previous value: ${this.receiver.count} new value ${this._backup.count} operation ${this._backup.sign}`)
        return this.backup;
    }

    abstract execute(number: number): void;

}