import './index.css';
import {
  HEADER,
  EXIT,
  MAIN_API_OPTIONS,
  NEWS_CARD_LIST_ACCOUNT,
  NEWS_COUNTER,
} from '../../js/constants/config';
import Header from '../../js/components/Header';
import Auth from '../../js/components/Auth';
import Exit from '../../js/components/Exit';
import NewsCardListAccount from '../../js/components/NewsCardListAccount';
import MainApi from '../../js/api/MainApi';
import NewsCounter from '../../js/components/NewsCounter';

const mainApi = new MainApi(MAIN_API_OPTIONS);
const header = new Header(HEADER);
const auth = new Auth();


if (auth.isLoggedIn()) {
  header.setLogin(localStorage.getItem('name'));
} else {
  header.setUnauthorized();
  window.location.pathname = '/';
}
const newsCounter = new NewsCounter(NEWS_COUNTER);
new Exit(EXIT, header, auth, mainApi);
const cardListAccount = new NewsCardListAccount(NEWS_CARD_LIST_ACCOUNT, mainApi, newsCounter);
cardListAccount.getNews();
