import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
  clazz: string;
  eventHandler: EventHandler;

  constructor(eventHandler: EventHandler, clazz: string) {
    this.clazz = clazz;
    this.eventHandler = eventHandler;
  }

  abstract createAction(): any;

  bind() {
    const action = this.createAction();
    this.eventHandler.addEventListenerToClass(this.clazz, "click", action);
  }
}
