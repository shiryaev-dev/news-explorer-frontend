export default class NewsCardListAccount {
  constructor(args, mainApi, newsCounter) {
    const {
      resultsContainer,
      template,
    } = args;
    this.resultsContainer = resultsContainer;
    this.template = template;
    this.mainApi = mainApi;
    this.newsCounter = newsCounter;
    this.cards = [];
    this._setEventListeners();
    this._getNews();
  }

  _getNews() {
    this.mainApi.getArticles()
      .then(res => {
        console.log(res);
        res.data.forEach(item => this._addCard(item));
        this.newsCounter.addUserBlock(res.data);
        this.newsCounter.keyWord(res.data);
        console.log(this.arrKey);
      })
      .catch(err => console.log(err));
  }

  _createCard(cardData) {
    const news = document.querySelector(this.template).content.cloneNode(true);
    news.querySelector('.news-card__link').href = cardData.link;
    news.querySelector('.news-card__key-word').textContent = cardData.keyword;
    news.querySelector('.news-card__image').src = cardData.image;
    news.querySelector('.news-card__date').textContent = cardData.date;
    news.querySelector('.news-card__title').textContent = cardData.title;
    news.querySelector('.news-card__text').textContent = cardData.text;
    news.querySelector('.news-card__source').textContent = cardData.source;
    news.querySelector('.news-card').setAttribute('data-id', cardData._id);
    return news.querySelector('.news-card');
  }

  _addCard(cardData) {
    const cardElement = this._createCard(cardData);
    this.cards.push(cardElement);
    this.resultsContainer.appendChild(cardElement);
  }

  _remove(event) {
    if (event.target.classList.contains('news-card__trash')) {
      const container = event.target.closest('.news-card');
      const articleId = event.target.closest('.news-card').dataset.id;
      this.mainApi.removeArticle(articleId)
        .then(() => {
          this.resultsContainer.removeChild(container);
          return this.mainApi.getArticles()
            .then(response => {
              this.newsCounter.addUserBlock(response.data);
              this.newsCounter.keyWord(response.data);
            });
        })
        .catch(err => console.log(err));
    }
  }

  _setEventListeners() {
    this.resultsContainer.addEventListener('click', event => this._remove(event));
  }
}
