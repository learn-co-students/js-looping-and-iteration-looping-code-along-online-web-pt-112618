import { eventNames } from "cluster";

// Code your solutions in this file
function writeCards(names, event) {
    const cardMessages = []
    for(let i = 0; i < names.length; i++){
        cardMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cardMessages
}

function countdown(integer) {
    while (integer > 0) {
        console.log(integer)
        integer -= 1
    }
    console.log(integer)
}