export default class Search {
  constructor(args, newsApi, newsCardList, newsCard, mainApi, formValidate) {
    const {
      form,
      inputSearch,
      resultsBlock,
      searchBlock,
      notFoundBlock,
      errorServerBlock,
      resultsContainer,
      showMoreButton,
      searchButton,
      errorInput,
    } = args;
    this.form = form;
    this.inputSearch = inputSearch;
    this.resultsBlock = resultsBlock;
    this.searchBlock = searchBlock;
    this.notFoundBlock = notFoundBlock;
    this.errorServerBlock = errorServerBlock;
    this.resultsContainer = resultsContainer;
    this.showMoreButton = showMoreButton;
    this.searchButton = searchButton;
    this.errorInput = errorInput;
    this.newsApi = newsApi;
    this.newsCardList = newsCardList;
    this.newsCard = newsCard;
    this.mainApi = mainApi;
    this.formValidate = formValidate;
    this.results = [];
    this._setEventListeners();
  }

  _onResults() {
    this.resultsBlock.classList.add('results_on');
  }

  _offResults() {
    this.resultsBlock.classList.remove('results_on');
  }

  _onSearch() {
    this.searchBlock.classList.add('preloader__message_on');
  }

  _offSearch() {
    this.searchBlock.classList.remove('preloader__message_on');
  }

  _onNotFound() {
    this.notFoundBlock.classList.add('preloader__message_on');
  }

  _offnotFound() {
    this.notFoundBlock.classList.remove('preloader__message_on');
  }

  _onErrorServer() {
    this.errorServerBlock.classList.add('preloader__message_on');
  }

  _offErrorServer() {
    this.errorServerBlock.classList.remove('preloader__message_on');
  }

  _clearResults() {
    this.resultsContainer.textContent = '';
    this.newsCardList.clearArr();
  }

  _search(event) {
    event.preventDefault();
    this._offnotFound();
    this._offErrorServer();
    this._clearResults();
    this._onSearch();
    this.formValidate.disableFormFields(this.inputSearch, this.searchButton);
    this.newsApi.getNews(this.inputSearch.value)
      .then(res => {
        res.articles.forEach(article => this.newsCardList.addCard(article, this.inputSearch.value));
        this.formValidate.enableFormFields(this.inputSearch, this.searchButton);
        this._offSearch();
        this._onResults();
        this._showMore();
        if (res.articles.length === 0) {
          this._offResults();
          this._onNotFound();
        }
      })
      .catch(err => {
        console.log(err);
        this.formValidate.enableFormFields(this.inputSearch, this.searchButton);
        this._offResults();
        this._onErrorServer();
        this._offSearch();
      });
  }

  _showMore() {
    this.newsCardList.append(this.showMoreButton);
  }

  _inputHandler() {
    if (!this.inputSearch.validity.valid) {
      this.searchButton.setAttribute('disabled', true);
      this.errorInput.classList.add('header__search-input-error_on');
    } else {
      this.searchButton.removeAttribute('disabled', true);
      this.errorInput.classList.remove('header__search-input-error_on');
    }
  }

  _setEventListeners() {
    this.form.addEventListener('input', this._inputHandler.bind(this));
    this.form.addEventListener('submit', this._search.bind(this));
    this.showMoreButton.addEventListener('click', this._showMore.bind(this));
    this.resultsContainer.addEventListener('click', event => this.newsCard.iconHandler(event));
  }
}
