/* eslint-disable class-methods-use-this */
export default class NewsCard {
  constructor(args, auth, mainApi) {
    const {
      templateNotLoggedIn,
      templateLoggedIn,
      dummyImage,
    } = args;
    this.templateNotLoggedIn = templateNotLoggedIn;
    this.templateLoggedIn = templateLoggedIn;
    this.dummyImage = dummyImage;
    this.auth = auth;
    this.mainApi = mainApi;
  }

  _getCardDate(cardDate) {
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const date = new Date(cardDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${day} ${months[month]}, ${year}`;
  }

  _template(template, cardData, inputValue) {
    const news = document.querySelector(template).content.cloneNode(true);
    news.querySelector('.news-card__link').href = cardData.url;
    news.querySelector('.news-card__key-word').textContent = inputValue;
    news.querySelector('.news-card__image').src = cardData.urlToImage || this.dummyImage;
    news.querySelector('.news-card__date').textContent = this._getCardDate(cardData.publishedAt);
    news.querySelector('.news-card__title').textContent = cardData.title;
    news.querySelector('.news-card__text').textContent = cardData.description || 'Нет текста';
    news.querySelector('.news-card__source').textContent = cardData.source.name;
    return news.querySelector('.news-card');
  }

  createCard(cardData, inputValue) {
    if (this.auth.isLoggedIn()) {
      return this._template(this.templateLoggedIn, cardData, inputValue);
    }
    return this._template(this.templateNotLoggedIn, cardData, inputValue);
  }

  _mark(container) {
    container.querySelector('.news-card__save-icon').classList.toggle('news-card__save-icon_save');
  }

  iconHandler(event) {
    if (event.target.classList.contains('news-card__save-icon_save')) {
      console.log(event.target);
      const container = event.target.closest('.news-card');
      const articleId = event.target.closest('.news-card').dataset.id;
      this.mainApi.removeArticle(articleId)
        .then(() => this._mark(container))
        .catch(err => console.log(err));
    } else if (event.target.classList.contains('news-card__save-icon')) {
      console.log(event.target);
      const container = event.target.closest('.news-card');
      const article = {};
      article.keyword = container.querySelector('.news-card__key-word').textContent;
      article.title = container.querySelector('.news-card__title').textContent;
      article.text = container.querySelector('.news-card__text').textContent;
      article.date = container.querySelector('.news-card__date').textContent;
      article.source = container.querySelector('.news-card__source').textContent;
      article.link = container.querySelector('.news-card__link').href;
      article.image = container.querySelector('.news-card__image').src;
      this.mainApi.createArticle(article)
        .then(res => {
          console.log(res);
          this._mark(container);
          container.setAttribute('data-id', res.data._id);
        })
        .catch(err => console.log(err));
    }
  }
}
