import { Strategy } from "./strategy";

export class Email implements Strategy{
    notify(text: string): string {
        return `I'm sending an email notification with this text: ${text}`;
    }
}