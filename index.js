// Code your solutions in this file

function writeCards(nameArray, eventName) {
  let result = []
  for (let i = 0; i < nameArray.length; i++) {
    result.push(`Thank you, ${nameArray[i]}, for the wonderful surprise gift!`);
  }
  return result;
}

function countdown(num) {
  let count = num
  while(count >= 0) {
    console.log(count);
    count--;
  }
}
