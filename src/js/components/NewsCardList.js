/* eslint-disable class-methods-use-this */
export default class NewsCardList {
  constructor(args, newsCard) {
    const {
      resultsContainer,
      numberOfCards,
    } = args;
    this.resultsContainer = resultsContainer;
    this.numberOfCards = numberOfCards;
    this.cards = [];
    this.newsCard = newsCard;
  }

  addCard(cardData, inputValue) {
    const cardElement = this.newsCard.createCard(cardData, inputValue);
    this.cards.push(cardElement);
  }

  append(button) {
    this.cards
      .splice(0, this.numberOfCards).forEach(card => this.resultsContainer.appendChild(card));
    if (this.cards.length === 0) {
      button.classList.add('results__button_off');
    } else {
      button.classList.remove('results__button_off');
    }
  }

  clearArr() {
    this.cards.length = 0;
  }
}
