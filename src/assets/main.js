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

if(getResults(input.value)) {
  setMessage('You Win!!!');
} else if(attempt.value >= 10) {
  setMessage('You Lose!!!')
} else {
  setMessage('Incorrect, have another try!');
}

functions getResults(input) {
  let html ='<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for(i = 0; i < input.length; i++) {
    if(input.charAt(i) == answer.value.charAt(i)) {
      html += '<span class="glyphicon glyphicon-ok"></span>';
    }else if(answer.value.indexOf(input.charAt(i))) > -1) {
      html += 'span class="glyphicon glyphicon-transfer"></span>';
    } else {
      html += 'span class="glyphicon glyphicon-remove"></span>';
    }
  }
  html += '</div></div>';
  document.getElementById('results').innerHTML += html;

  if(input == answer.value) {
    return true;
  }
  return false;
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
