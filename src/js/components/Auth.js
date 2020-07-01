/* eslint-disable class-methods-use-this */

export default class Auth {
  login(name) {
    localStorage.setItem('authorization', 'true');
    localStorage.setItem('name', name);
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return (localStorage.getItem('authorization') === 'true');
  }
}
