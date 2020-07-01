export default class NewsApi {
  constructor(options, dependencies) {
    this.options = options;
    this.dependencies = dependencies;
  }

  getNews(query) {
    const {
      apiKey,
      pageSize,
      url,
    } = this.options;
    const { getFromDate, getToDate } = this.dependencies;
    const to = getToDate();
    const from = getFromDate();
    return fetch(`${url}q=${query}&from=${from}&to=${to}&pageSize=${pageSize}&apiKey=${apiKey}`)
      .then(res => {
        if (!res.ok) {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
      });
  }
}
