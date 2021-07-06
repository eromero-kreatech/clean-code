export class Receiver {
    constructor(public count: number, public sign?: string) {
    }


    clone(): Receiver{
       return new Receiver(this.count, this.sign)
    }
}