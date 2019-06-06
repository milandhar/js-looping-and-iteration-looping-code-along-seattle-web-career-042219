// Code your solutions in this file

function writeCards(stringNames, eventName) {
  let responseArray = []
  for(let i = 0; i < stringNames.length; i++) {
    responseArray.push(`Thank you, ${stringNames[i]}, for the wonderful surprise gift!`);
  }
  return responseArray;
}


function countdown(number) {
  while(number > -1) {
    console.log(number--);
  }
}
