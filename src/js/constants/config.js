const HEADER = {
  authButton: document.querySelector('.header__nav-item-button_auth'),
  userButton: document.querySelector('.header__nav-item-button_in'),
  savedLink: document.querySelector('.header__nav-item_saved'),
  userName: document.querySelector('.header__nav-item-button_user'),
};

const MAIN_API_URL = 'https://api.newsexplorer.ml';

const MAIN_API_OPTIONS = {
  signin: `${MAIN_API_URL}/signin`,
  signup: `${MAIN_API_URL}/signup`,
  logout: `${MAIN_API_URL}/logout`,
  getArticles: `${MAIN_API_URL}/articles`,
  createArticle: `${MAIN_API_URL}/articles`,
  deleteArticle: `${MAIN_API_URL}/articles`,
  getUser: `${MAIN_API_URL}/users/me`,
};

const NEWS_API = {
  apiKey: '8c1a343df6694b69bbe74298bcea01a3',
  pageSize: '100',
  url: 'https://praktikum.tk/news/v2/everything?',
};

const REGISTRATION_POPUP = {
  popupWindow: document.querySelector('.popup__registration'),
  closeButton: '.popup__close',
  openButton: document.querySelector('.header__nav-item-button_auth'),
  actionButton: '.popup__form-button',
  nameForm: '.popup__form',
  errorEmail: '.popup__input-error_email',
  errorPass: '.popup__input-error_password',
  errorName: '.popup__input-error_name',
  errorServer: '.popup__error-from-server',
  emailInput: '.popup__input_email',
  passInput: '.popup__input_password',
  nameInput: '.popup__input_name',
  buttonEnter: document.querySelector('.popup__link_enter'),
  popupWindowLogin: document.querySelector('.popup__login'),
};

const LOGIN_POPUP = {
  popupWindow: document.querySelector('.popup__login'),
  closeButton: '.popup__close',
  actionButton: '.popup__form-button',
  nameForm: '.popup__form',
  errorEmail: '.popup__input-error_email',
  errorPass: '.popup__input-error_password',
  errorServer: '.popup__error-from-server',
  emailInput: '.popup__input_email',
  passInput: '.popup__input_password',
  buttonReg: document.querySelector('.popup__link_reg'),
  buttonEnter: document.querySelector('.popup__link_enter'),
  popupWindowRegistration: document.querySelector('.popup__registration'),
};

const SUCCESS_POPUP = {
  popupWindow: document.querySelector('.popup__success'),
  closeButton: '.popup__close',
  buttonEnter: document.querySelector('.popup__link_success-registration'),
};

const EXIT = {
  exitButton: document.querySelector('.header__nav-item-button_in'),
};

const SEARCH = {
  form: document.querySelector('.header__form'),
  inputSearch: document.querySelector('.header__form-input'),
  resultsBlock: document.querySelector('.results'),
  searchBlock: document.querySelector('.preloader__message_search'),
  notFoundBlock: document.querySelector('.preloader__message_not-found'),
  errorServerBlock: document.querySelector('.preloader__message_error'),
  resultsContainer: document.querySelector('.results__container'),
  showMoreButton: document.querySelector('.results__button'),
  searchButton: document.querySelector('.header__search-button'),
  errorInput: document.querySelector('.header__search-input-error'),
};

const NEWS_CARD_LIST = {
  resultsContainer: document.querySelector('.results__container'),
  numberOfCards: 3,
};

const NEWS_CARD = {
  templateNotLoggedIn: '#news-card-not-logged-in',
  templateLoggedIn: '#news-card-logged-in',
  dummyImage: 'https://dummyimage.com/600x400/fff/000.jpg&text=%D0%9D%D0%B5%D1%82+%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F',
};

const NEWS_CARD_LIST_ACCOUNT = {
  resultsContainer: document.querySelector('.saved-results__container'),
  template: '#news-card-saved',
};

const NEWS_COUNTER = {
  resultsContainer: document.querySelector('.saved-results__container'),
  nameString: document.querySelector('.header-save__info'),
  keyWordString: document.querySelector('.header-save__word'),
  keyWordTitle: document.querySelector('.header-save__keywords'),
};

const ERROR_TEXT = {
  textName: 'Имя должно быть написано с заглавной буквы кириллицей от 2 до 30 символов',
  textPass: 'Минимум 8 символов',
  textEmail: 'Здесь должен быть email',
  textRequired: 'Это обязательное поле',
};


export {
  HEADER,
  MAIN_API_OPTIONS,
  NEWS_API,
  REGISTRATION_POPUP,
  LOGIN_POPUP,
  SUCCESS_POPUP,
  EXIT,
  SEARCH,
  NEWS_CARD_LIST,
  NEWS_CARD,
  NEWS_CARD_LIST_ACCOUNT,
  NEWS_COUNTER,
  ERROR_TEXT,
};
