import { Notifier } from "./strategy";

export class Sms implements Notifier{
    notify(text: string): void {
        console.log(`I'm sending an SMS notification with this text: ${text}`)
    }
}