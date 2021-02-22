import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
  clazz: string;
  url: string;
  eventHandler: EventHandler;

  constructor(clazz: string, url: string) {
    this.clazz = clazz;
    this.url = url;
    this.eventHandler = new EventHandler();
  }

  abstract createLink(): string;

  bind() {
    const link = this.createLink();
    this.eventHandler.addEventListenerToClass(this.clazz, "click", () => {
      console.log("clicou");
      window.open(link);
    });
  }
}
