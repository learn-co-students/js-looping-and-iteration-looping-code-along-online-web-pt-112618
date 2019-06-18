// Code your solutions in this file
const namesArray = ["Lisa", "Kaitlin", "Jan"]

function writeCards(namesArray, birthday) {
  let cards = []
  for (let i = 0; i < namesArray.length; i++) {
    cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${birthday} gift!`);
  }
    return cards;
}

function countdown(countdown) {
  while (countdown > 0) {
    console.log(countdown);
    countdown -= 1;
  }
  console.log(countdown);
}
