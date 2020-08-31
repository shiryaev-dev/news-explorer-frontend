export default class BaseComponent {
  constructor() {
    this._handlers = [];
  }

  _setHandlers(handlers) {
    handlers.forEach(({ element, event, method }) => {
      this._addListener(element, event, method);
    });
  }

  _addListener(element, event, method) {
    element.addEventListener(event, method);
    this._handlers.push({ element, event, method });
  }

  _removeListener() {
    this._handlers.forEach(({ element, event, method }) => {
      element.removeEventListener(event, method);
    });
  }
}
