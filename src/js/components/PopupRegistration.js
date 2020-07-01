/* eslint-disable no-param-reassign */
import BaseComponent from './BaseComponent';

export default class PopupRegistration extends BaseComponent {
  constructor(args, mainApi, formValidate) {
    super();
    const {
      popupWindow,
      closeButton,
      openButton,
      actionButton,
      nameForm,
      errorEmail,
      errorPass,
      errorName,
      errorServer,
      emailInput,
      passInput,
      nameInput,
      buttonEnter,
      popupWindowLogin,
    } = args;
    this.mainApi = mainApi;
    this.formValidate = formValidate;
    this._popupWindow = popupWindow;
    this._closeButton = this._popupWindow.querySelector(closeButton);
    this._openButton = openButton;
    this._actionButton = this._popupWindow.querySelector(actionButton);
    this._nameForm = this._popupWindow.querySelector(nameForm);
    this._errorEmail = this._popupWindow.querySelector(errorEmail);
    this._errorPass = this._popupWindow.querySelector(errorPass);
    this._errorName = this._popupWindow.querySelector(errorName);
    this._errorServer = this._popupWindow.querySelector(errorServer);
    this._emailInput = this._popupWindow.querySelector(emailInput);
    this._passInput = this._popupWindow.querySelector(passInput);
    this._nameInput = this._popupWindow.querySelector(nameInput);
    this.arrValidate = [
      { input: this._emailInput, error: this._errorEmail },
      { input: this._passInput, error: this._errorPass },
      { input: this._nameInput, error: this._errorName },
    ];
    this._buttonEnter = buttonEnter;
    this._popupWindowLogin = popupWindowLogin;
    this._openButton.addEventListener('click', this.open.bind(this));
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

  setDependencies(dependencies) {
    this.dependencies = dependencies;
  }

  openPopupLogin() {
    const { popupLogin } = this.dependencies;
    popupLogin.open();
    this.close();
  }

  _clearFields() {
    this.arrValidate.forEach(obj => { obj.input.value = ''; obj.error.textContent = ''; });
    this._errorServer.textContent = '';
    this._actionButton.classList.add('popup__form-button_disabled');
  }

  _validate() {
    this.formValidate.setSubmitButtonState(this.arrValidate, this._actionButton);
  }

  _reg(event) {
    const { popupSuccess } = this.dependencies;
    event.preventDefault();
    this._actionButton.textContent = 'Регистрируемся...';
    this.arrValidate
      .forEach(obj => this.formValidate.disableFormFields(this._actionButton, obj.input));
    this.mainApi.signup(this._emailInput.value, this._passInput.value, this._nameInput.value)
      .then(() => {
        this.arrValidate
          .forEach(obj => this.formValidate.enableFormFields(this._actionButton, obj.input));
        this.close();
        popupSuccess.open();
        this._actionButton.textContent = 'Зарегистрироваться';
      })
      .catch(err => {
        console.log(err);
        this.arrValidate
          .forEach(obj => this.formValidate.enableFormFields(this._actionButton, obj.input));
        this._actionButton.textContent = 'Зарегистрироваться';
        this._errorServer.textContent = 'Такой email уже есть';
      });
  }

  _setEventListeners() {
    this._setHandlers([
      { element: this._buttonEnter, event: 'click', method: this.openPopupLogin.bind(this) },
      { element: this._closeButton, event: 'click', method: event => this.close(event) },
      { element: document, event: 'keydown', method: event => this._closeEscOrClick(event) },
      { element: document, event: 'click', method: event => this._closeEscOrClick(event) },
      { element: this._nameForm, event: 'input', method: this._validate.bind(this) },
      { element: this._nameForm, event: 'submit', method: this._reg.bind(this) },
    ]);
  }
}
