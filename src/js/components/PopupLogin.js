/* eslint-disable no-param-reassign */
import BaseComponent from './BaseComponent';

export default class PopupLogin extends BaseComponent {
  constructor(args, mainApi, auth, header, formValidate) {
    super();
    const {
      popupWindow,
      closeButton,
      actionButton,
      nameForm,
      errorEmail,
      errorPass,
      errorServer,
      emailInput,
      passInput,
      buttonReg,
      buttonEnter,
      popupWindowRegistration,
    } = args;
    this.mainApi = mainApi;
    this.auth = auth;
    this.header = header;
    this.formValidate = formValidate;
    this._popupWindow = popupWindow;
    this._closeButton = this._popupWindow.querySelector(closeButton);
    this._actionButton = this._popupWindow.querySelector(actionButton);
    this._nameForm = this._popupWindow.querySelector(nameForm);
    this._errorEmail = this._popupWindow.querySelector(errorEmail);
    this._errorPass = this._popupWindow.querySelector(errorPass);
    this._errorServer = this._popupWindow.querySelector(errorServer);
    this._emailInput = this._popupWindow.querySelector(emailInput);
    this._passInput = this._popupWindow.querySelector(passInput);
    this.arrValidate = [
      { input: this._emailInput, error: this._errorEmail },
      { input: this._passInput, error: this._errorPass },
    ];
    this._buttonReg = buttonReg;
    this._buttonEnter = buttonEnter;
    this._popupWindowRegistration = popupWindowRegistration;
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
    this._actionButton.classList.add('popup__form-button_disabled');
  }

  setDependencies(dependencies) {
    this.dependencies = dependencies;
  }

  openPopupReg() {
    const { popupReg } = this.dependencies;
    popupReg.open();
    this.close();
  }

  _validate() {
    this.formValidate.setSubmitButtonState(this.arrValidate, this._actionButton);
  }

  _enter(event) {
    event.preventDefault();
    this._actionButton.textContent = 'Входим...';
    this.arrValidate
      .forEach(obj => this.formValidate.disableFormFields(this._actionButton, obj.input));
    this.mainApi.signin(this._emailInput.value, this._passInput.value)
      .then(() => {
        this.arrValidate
          .forEach(obj => this.formValidate.enableFormFields(this._actionButton, obj.input));
        this._actionButton.textContent = 'Войти';
        this.auth.login();
        this.close();
        return this.mainApi.getUserData()
          .then(response => {
            this.auth.login(response.data.name);
            this.header.setLogin(localStorage.getItem('name'));
          });
      })
      .catch(err => {
        this.arrValidate
          .forEach(obj => this.formValidate.enableFormFields(this._actionButton, obj.input));
        console.log(err);
        this._actionButton.textContent = 'Войти';
        this._errorServer.textContent = 'Неправильная почта или пароль';
      });
  }

  _setEventListeners() {
    this._setHandlers([
      { element: this._buttonReg, event: 'click', method: this.openPopupReg.bind(this) },
      { element: this._closeButton, event: 'click', method: event => this.close(event) },
      { element: document, event: 'keydown', method: event => this._closeEscOrClick(event) },
      { element: document, event: 'click', method: event => this._closeEscOrClick(event) },
      { element: this._nameForm, event: 'input', method: this._validate.bind(this) },
      { element: this._nameForm, event: 'submit', method: this._enter.bind(this) },
    ]);
  }
}
