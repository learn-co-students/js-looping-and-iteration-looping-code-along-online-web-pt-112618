// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];
//
// function wrapGifts(gifts) {
//   for (let i = 0; 1 < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }
//
// wrapGifts(gifts);



const name = ["Ada", "Brendan", "Ali"];

let giftMessage = []
function writeCards(name, eventName) {
  for (let i = 0; i < name.length; i++) {
    giftMessage.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
  }
  return giftMessage;
}

function countdown(num) {
  let count = num
  while(count >= 0) {
    console.log(count);
    count--;
  }
}
