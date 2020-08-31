export default class MainApi {
  constructor(options) {
    this.options = options;
  }

  // eslint-disable-next-line class-methods-use-this
  _getResponseData(res) {
    if (!res.ok) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(`Ошибка ${res.status}`);
    }
    return res.json();
  }

  signup(userEmail, userPass, userName) {
    return fetch(this.options.signup, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPass,
        name: userName,
      }),
    })
      .then(this._getResponseData);
  }

  signin(userEmail, userPass) {
    return fetch(this.options.signin, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPass,
      }),
    })
      .then(this._getResponseData);
  }

  logout() {
    return fetch(this.options.logout, {
      method: 'POST',
      credentials: 'include',
    })
      .then(this._getResponseData);
  }

  createArticle(news) {
    return fetch(this.options.createArticle, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword: news.keyword,
        title: news.title,
        text: news.text,
        date: news.date,
        source: news.source,
        link: news.link,
        image: news.image,
      }),
    })
      .then(this._getResponseData);
  }

  getArticles() {
    return fetch(this.options.getArticles, {
      method: 'GET',
      credentials: 'include',
    })
      .then(this._getResponseData);
  }

  removeArticle(articleId) {
    return fetch(`${this.options.deleteArticle}/${articleId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this._getResponseData);
  }

  getUserData() {
    return fetch(this.options.getUser, {
      method: 'GET',
      credentials: 'include',
    })
      .then(this._getResponseData);
  }
}
