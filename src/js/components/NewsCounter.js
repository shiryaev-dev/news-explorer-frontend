export default class NewsCounter {
  constructor(args) {
    const {
      resultsContainer,
      nameString,
      keyWordString,
      keyWordTitle,
    } = args;
    this.arrKey = [];
    this.resultsContainer = resultsContainer;
    this.nameString = nameString;
    this.keyWordString = keyWordString;
    this.keyWordTitle = keyWordTitle;
  }

  addUserBlock(newsArr) {
    if (newsArr.length === 0) {
      this.keyWordTitle.style.display = 'none';
      this.nameString.textContent = `${localStorage.getItem('name')}, у вас нет сохраненных статей`;
    } else if (newsArr.length === 1) {
      this.nameString.textContent = `${localStorage.getItem('name')}, у вас ${newsArr.length} сохраненная статья`;
    } else if (newsArr.length > 1 && newsArr.length < 5) {
      this.nameString.textContent = `${localStorage.getItem('name')}, у вас ${newsArr.length} сохраненные статьи`;
    } else {
      this.nameString.textContent = `${localStorage.getItem('name')}, у вас ${newsArr.length} сохраненных статей`;
    }
  }

  keyWord(data) {
    this.arrKey = data.map(obj => obj.keyword);
    const key = {};
    this.arrKey.forEach(item => {
      if (key[item]) {
        key[item] += 1;
      } else {
        key[item] = 1;
      }
    });
    const words = Object.keys(key).sort((a, b) => key[b] - key[a]);
    if (words.length === 1) {
      this.keyWordString.textContent = `${words[0]}`;
    } else if (words.length === 2) {
      this.keyWordString.textContent = `${words[0]}, ${words[1]}`;
    } else {
      this.keyWordString.textContent = `${words[0]}, ${words[1]} и ${words.length - 2} другим`;
    }
  }
}
