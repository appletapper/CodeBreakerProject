let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    //new project addititions
    if(answer.value == '' || attempts.value == '') {
      setHiddenFields();
    }
}

if(!validateInput(input.value)) {
  return;
}
attempt.value++;

functions getResults(input) {
  let html ='';
}

//New project functions...

//setHiddenFields calculates a random number between 0 to 9999 (inclusive)
function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000).toString();
  while(answer.value.length < 4) {
    answer.value = "0" + answer.value;
  }
  attempt.value = "0";
}

function setMessage(message) {
  document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
  if(input.length != 4) {
    setMessage('Guesses must exactly four numbers long, or else prepare to get your butt kicked! ;-)');
    return false;
  }
  return true;
}
