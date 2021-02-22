export default class EventHandler {
  addEventLitenerToClass(clazz: string, event: string, fn: any) {
    const elements: any = document.querySelector(clazz);
    for (const element of elements) {
      element.addEventListener(event, fn);
    }
  }
}
