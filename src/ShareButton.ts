import EventHandler from "./EventHandler";

export default class ShareButton {
  url: string;
  eventHandler: EventHandler;

  constructor(url: string) {
    this.url = url;
    this.eventHandler = new EventHandler();
  }

  bind(clazz: string, socialNetwork: string) {
    let link: string;

    this.eventHandler.addEventLitenerToClass(clazz, "click", () =>
      window.open(link)
    );
  }
}
