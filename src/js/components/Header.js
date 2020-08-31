export default class Header {
  constructor(args) {
    const {
      authButton,
      userButton,
      savedLink,
      userName,
    } = args;
    this.authButton = authButton;
    this.userButton = userButton;
    this.savedLink = savedLink;
    this.userName = userName;
  }

  setLogin(name) {
    this.authButton.classList.add('header__nav-item-button_hide');
    this.userButton.classList.remove('header__nav-item-button_hide');
    this.savedLink.classList.remove('header__nav-item_hide');
    this.userName.textContent = name;
  }

  setUnauthorized() {
    this.authButton.classList.remove('header__nav-item-button_hide');
    this.userButton.classList.add('header__nav-item-button_hide');
    this.savedLink.classList.add('header__nav-item_hide');
  }
}
