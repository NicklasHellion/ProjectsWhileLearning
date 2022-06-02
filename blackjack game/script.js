let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
  return 5;
}

function startGame() {
  renderGame();
}

function renderGame() {
  //messageEl.textContent = message;
  cardsEl.textContent = "Cards: ";
  for (let x = 0; x < cards.length; x++) {
    cardsEl.textContent += cards[x] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You lost!";
    isAlive = false;
  }
}

function newCard() {
  console.log("Draw a new card from the deck");
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}
