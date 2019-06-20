function writeCards(array, event) {
  let thankYou = []
  for (let i = 0; i < array.length; i++) {
    thankYou.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
  };
  return thankYou;
};

function countdown(i) {
  while (i >= 0) {
    console.log(i--);
  }
}
