let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//New project functions...

//setHiddenFields calculates a random number between 0 to 9999 (inclusive)
function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000);
}
