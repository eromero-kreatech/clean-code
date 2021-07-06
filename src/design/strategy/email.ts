import { Notifier } from "./strategy";

export class Email implements Notifier{
    notify(text: string): void {
        console.log(`I'm sending an email notification with this text: ${text}`)
    }
}