import { Strategy } from "./strategy";

export class Phone implements Strategy {
  notify(text: string): string {
    return `I'm sending an Phone notification with this text: ${text}`;
  }
}
