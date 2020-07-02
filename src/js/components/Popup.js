/* eslint-disable no-param-reassign */
import BaseComponent from './BaseComponent';

export default class Popup extends BaseComponent {
  constructor(formValidate) {
    super();
    this.formValidate = formValidate;
  }

  open() {
    this._setEventListeners();
    this._popupWindow.classList.add('popup_is-opened');
  }

  close() {
    this._clearFields();
    this._removeListener();
    this._popupWindow.classList.remove('popup_is-opened');
  }

  _closeEscOrClick(event) {
    if (event.key === 'Escape' || event.target.classList.contains('popup_is-opened')) {
      this.close();
    }
  }

  _clearFields() {
    this.arrValidate.forEach(obj => { obj.input.value = ''; obj.error.textContent = ''; });
    this._errorServer.textContent = '';
    this._actionButton.setAttribute('disabled', true);
    this._actionButton.classList.add('popup__form-button_disabled');
  }

  _validate() {
    this.formValidate.setSubmitButtonState(this.arrValidate, this._actionButton);
  }
}
