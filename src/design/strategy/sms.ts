import { Strategy } from "./strategy";

export class Sms implements Strategy {
  notify(text: string): string {
    return `I'm sending an SMS notification with this text: ${text}`;
  }
}
