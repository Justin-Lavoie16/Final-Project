if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-5-02-JS/sw.js", {
    scope: "/Unit-5-02-JS/",
  })
}

"use strict"

const ROCK = 1
const PAPER = 2
const SCISSORS = 3

function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}



function myButtonClicked() {

  var random = Math.floor(Math.random() * 3) + 1
  var paperSelected = document.getElementById("paper").checked
  var rockSelected = document.getElementById("rock").checked
  var scissorSelected = document.getElementById("scissor").checked
  var message = "";

  
    if (localStorage.CookieCountGoUp) {
    localStorage.CookieCountGoUp = Number(localStorage.CookieCountGoUp) + 1;
  } else {
    localStorage.CookieCountGoUp = +1;
  }
  document.getElementById("answer").innerHTML =
    "You have played against the bot " + localStorage.CookieCountGoUp + " times already";

  
  if (random == ROCK) {
    if (paperSelected) {
      message = "The computer choose ✊ rock! You win!";
    localStorage.wins = Number(localStorage.wins) + 1;
    } else {
    localStorage.wins = +1;
        
    }
     if (random == ROCK) { 
    if (scissorSelected) {
      message = "The computer choose ✊ rock! You lose!";
            localStorage.lost = Number(localStorage.lost) + 1;
    } else {
    localStorage.lost = +1;
    }
     }

     if (random == ROCK) { 
    if (rockSelected) {
      message = "The computer choose ✊ rock! It's a tie";
            localStorage.ties = Number(localStorage.ties) + 1;
          } else {
    localStorage.ties = +1;
    }
     }
  
  } if (random == PAPER) {
        if (scissorSelected) {
      message = "The computer choose ✋ paper! You win!";
localStorage.wins = Number(localStorage.wins) + 1;
    } else {
    localStorage.wins = +1;
        }
  }
  if (random == PAPER) { 
    if (rockSelected) {
      message = "The computer choose ✋ Paper! You lose!";
            localStorage.lost = Number(localStorage.lost) + 1;
          } else {
    localStorage.lost = +1;
    }
  }
   if (random == PAPER) { 
    if (paperSelected) {
      message = "The computer choose ✋ Paper! It's a tie";
            localStorage.ties = Number(localStorage.ties) + 1;
          } else {
    localStorage.ties = +1;
    }
     }
   if (random == SCISSORS) {
        if (rockSelected) {
      message = "The computer choose ✌️ Scissor! You win!";
localStorage.wins = Number(localStorage.wins) + 1;
    } else {
    localStorage.wins = +1;
        }
}
if (random == SCISSORS) { 
    if (paperSelected) {
      message = "The computer choose ✌️ Scissor! You lose!";
            localStorage.lost = Number(localStorage.lost) + 1;
          } else {
    localStorage.lost = +1;
    }
  }
  if (random == SCISSORS) { 
    if (scissorSelected) {
      message = "The computer choose ✌️ Scissor! It's a tie";
            localStorage.ties = Number(localStorage.ties) + 1;
          } else {
    localStorage.ties = +1;
    }
     }
  document.getElementById("hello-world").innerHTML = message;
  
  document.getElementById("win").innerHTML = "you have won " + localStorage.wins + " times"

    document.getElementById("lose").innerHTML = "you have lost " + localStorage.lost + " times"

      document.getElementById("tie").innerHTML = "you have tied " + localStorage.ties + " times"

}



