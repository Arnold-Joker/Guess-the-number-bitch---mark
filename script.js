const startButton = document.getElementById("startButton");
const timerElement = document.getElementById("timer");
let time = 0;
let timer;

  startButton.addEventListener("click", function() {
    timer = setInterval(function () {
      time++;
      const hours = Math.floor(time / 3600).toString().padStart(2, "0");
      const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
      const seconds = (time % 60).toString().padStart(2, "0");
      timerElement.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
     alert("The game starts now");
    startButton.disabled = true
    submit.hidden = false
    startButton.hidden = true
    submit.disabled = false
    guessBox.disabled = false
  });



const randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.getElementById("submit");
const guessBox = document.getElementById("guessBox");
const text = document.getElementById("text");
const box = document.getElementsByClassName("box")

let attempt = 0;
let timeRecord;

submit.addEventListener('click', checkGuess);

function checkGuess() {
  const userGuess = Number(guessBox.value);
  attempt++;

   if (attempt <= 7) { 

  
  if (userGuess === randomNumber) {
    text.textContent = "You guess it"  + " in " + attempt + " attempts";
    
    text.style.color = "#9983e7";
    box[0].style.borderColor = "#81E979";
    guessBox.style.borderColor = "#81E979";
    guessBox.disabled = true;
    submit.disabled = true;
    clearInterval(timer);

    timeRecord = `${hours}:${minutes}:${seconds}`;
    text.textContent = "Time Record:", timeRecord;
  }

    else if (userGuess > randomNumber) {
      text.textContent = "too high "
      box[0].style.borderWidth = (attempt * 2) + "px";
      box[0].style.borderColor = "red";
    }
  
    else if (userGuess < randomNumber) {
      text.textContent = "too low ";
      box[0].style.borderWidth = (attempt * 2) - attempt + "px";
      box[0].style.borderColor = "red";
    }

   } else {
     text.textContent = "Game Over,  " +  "The number is: " + randomNumber ;
     text.style.color = "red";
     guessBox.hidden = true;
     submit.hidden = true;
     clearInterval(timer);
   }

  guessBox.value = "";
  
}
