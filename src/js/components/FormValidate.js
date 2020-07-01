/* eslint-disable class-methods-use-this */
export default class FormValidate {
  constructor(args) {
    const {
      textName,
      textPass,
      textEmail,
      textRequired,
    } = args;
    this.textName = textName;
    this.textPass = textPass;
    this.textEmail = textEmail;
    this.textRequired = textRequired;
  }

  checkInputValidity(obj) {
    const { input, error } = obj;
    if (input.validity.valueMissing) {
      error.textContent = this.textRequired;
      return false;
    }
    if (input.validity.patternMismatch && input.classList.contains('popup__input_name')) {
      error.textContent = this.textName;
      return false;
    }
    if (input.validity.tooShort && input.classList.contains('popup__input_password')) {
      error.textContent = this.textPass;
      return false;
    }
    if (input.validity.patternMismatch && input.classList.contains('popup__input_email')) {
      error.textContent = this.textEmail;
      return false;
    }
    error.textContent = '';
    return true;
  }

  setSubmitButtonState(arr, button) {
    if (!arr.every(obj => this.checkInputValidity(obj))) {
      button.setAttribute('disabled', true);
      button.classList.add('popup__form-button_disabled');
    } else {
      button.removeAttribute('disabled');
      button.classList.remove('popup__form-button_disabled');
    }
    arr.forEach(obj => this.checkInputValidity(obj));
  }

  disableFormFields(button, input) {
    button.setAttribute('disabled', true);
    input.setAttribute('disabled', true);
  }

  enableFormFields(button, input) {
    button.removeAttribute('disabled', true);
    input.removeAttribute('disabled', true);
  }
}
