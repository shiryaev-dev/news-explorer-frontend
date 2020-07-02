import './index.css';
import {
  REGISTRATION_POPUP,
  MAIN_API_OPTIONS,
  LOGIN_POPUP,
  SUCCESS_POPUP,
  HEADER, EXIT,
  SEARCH,
  NEWS_API,
  NEWS_CARD_LIST,
  NEWS_CARD,
  ERROR_TEXT,
} from '../../js/constants/config';
import PopupRegistration from '../../js/components/PopupRegistration';
import PopupLogin from '../../js/components/PopupLogin';
import Auth from '../../js/components/Auth';
import Header from '../../js/components/Header';
import MainApi from '../../js/api/MainApi';
import NewsApi from '../../js/api/NewsApi';
import PopupSuccess from '../../js/components/PopupSuccess';
import Exit from '../../js/components/Exit';
import Search from '../../js/components/Search';
import NewsCardList from '../../js/components/NewsCardList';
import FormValidate from '../../js/components/FormValidate';
import { getToDate, getFromDate } from '../../js/utils/index';
import NewsCard from '../../js/components/NewsCard';

const newsApi = new NewsApi(NEWS_API, { getToDate, getFromDate });
const header = new Header(HEADER);
const auth = new Auth();
const mainApi = new MainApi(MAIN_API_OPTIONS);
const formValidate = new FormValidate(ERROR_TEXT);
const popupReg = new PopupRegistration(REGISTRATION_POPUP, mainApi, formValidate);
const popupLogin = new PopupLogin(LOGIN_POPUP, mainApi, auth, header, formValidate);
const popupSuccess = new PopupSuccess(SUCCESS_POPUP, popupLogin);
const newsCard = new NewsCard(NEWS_CARD, auth, mainApi);
const newsCardList = new NewsCardList(NEWS_CARD_LIST, newsCard);
popupReg.setDependencies({ popupLogin, popupSuccess });
popupLogin.setDependencies({ popupReg });

if (auth.isLoggedIn()) {
  header.setLogin(localStorage.getItem('name'));
} else {
  header.setUnauthorized();
}

new Exit(EXIT, header, auth, mainApi);
new Search(SEARCH, newsApi, newsCardList, newsCard, mainApi, formValidate);
