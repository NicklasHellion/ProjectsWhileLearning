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
  let floor = Math.floor(Math.random() * 11) + 1;
  return floor;
}

function startGame() {
  renderGame();
}

function renderGame() {
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
  messageEl.textContent = message;
}

function newCard() {
  console.log("Draw a new card from the deck");
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}

// function rollDice() {
//   let floor = Math.floor(Math.random() * 6) + 1;
//   return floor;
// }

// console.log(rollDice());
