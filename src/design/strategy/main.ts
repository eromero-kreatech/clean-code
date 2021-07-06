import { Email } from "./email";
import { Sms } from "./sms";
import { Notifier } from "./strategy";


const notifiers: Notifier[] = [new Email(), new Sms()];

notifiers.forEach(notifier => {
    notifier.notify("This is the notification")
})
