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

  if (random == ROCK) {
    if (paperSelected) {
      message = "The computer choose rock! You win!";
    } else if (rockSelected) {
      message = "The computer choose rock! It's a tie";
    } else {
      message = "The computer choose rock! You lose!";
    }
  } else if (random == PAPER) {
        if (scissorSelected) {
      message = "The computer choose paper! You win!";
    } else if (paperSelected) {
      message = "The computer choose paper! It's a tie";
    } else {
      message = "The computer choose paper! You lose!";
        }
  } else if (random == SCISSORS) {
    if (rockSelected) {
      message = "The computer choose Scissor! You win!";
    } else if (scissorSelected) {
      message = "The computer choose Scissor! It's a tie";
    } else  {
      message = "The computer choose Scissor! You lose!";
        }
  }


  document.getElementById("hello-world").innerHTML = message;
}



