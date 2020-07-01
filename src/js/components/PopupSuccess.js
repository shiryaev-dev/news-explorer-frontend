import BaseComponent from './BaseComponent';

export default class PopupSuccess extends BaseComponent {
  constructor(args, popupLogin) {
    super();
    const {
      popupWindow,
      closeButton,
      buttonEnter,
    } = args;
    this.popupLogin = popupLogin;
    this._popupWindow = popupWindow;
    this._closeButton = this._popupWindow.querySelector(closeButton);
    this._buttonEnter = buttonEnter;
  }

  open() {
    this._setEventListeners();
    this._popupWindow.classList.add('popup_is-opened');
  }

  close() {
    this._removeListener();
    this._popupWindow.classList.remove('popup_is-opened');
  }

  _closeEscOrClick(event) {
    if (event.key === 'Escape' || event.target.classList.contains('popup_is-opened')) {
      this.close();
    }
  }

  openPopupLogin() {
    this.popupLogin.open();
    this.close();
  }

  _setEventListeners() {
    this._setHandlers([
      { element: this._buttonEnter, event: 'click', method: this.openPopupLogin.bind(this) },
      { element: this._closeButton, event: 'click', method: event => this.close(event) },
      { element: document, event: 'keydown', method: event => this._closeEscOrClick(event) },
      { element: document, event: 'click', method: event => this._closeEscOrClick(event) },
    ]);
  }
}
