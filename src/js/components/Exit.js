export default class Exit {
  constructor(args, header, auth, mainApi) {
    const {
      exitButton,
    } = args;
    this.exitButton = exitButton;
    this.header = header;
    this.auth = auth;
    this.mainApi = mainApi;
    this._setHandlers();
  }

  _exit(event) {
    event.preventDefault();
    this.mainApi.logout()
      .then(() => {
        this.auth.logout();
        this.header.setUnauthorized();
        if (window.location.pathname !== '/') {
          window.location.pathname = '/';
        }
      })
      .catch(err => console.log(err));
  }

  _setHandlers() {
    this.exitButton.addEventListener('click', this._exit.bind(this));
  }
}
