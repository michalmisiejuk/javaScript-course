"use strict";

// document.querySelector('#message') // if it would be id

/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = -120;

document.querySelector(".guess").value;
console.log(document.querySelector(".guess").value);

document.querySelector(".guess").value = -23;
console.log(document.querySelector(".guess").value);
*/

// const randomizer = function () {
//   let kurwa = Math.trunc(Math.random() * 20) + 1;
//   return kurwa;
// };
// let number = randomizer();

let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = number;
let score = Number((document.querySelector(".score").textContent = 20));
let highscore = 0;
//funkcja - zmieniajaca .message uzywajaca arguementu jako tekstu do zmiany
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Main game Logic/loop
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no unput
  if (!guess) {
    displayMessage("Not a number");

    // When player WINS
  } else if (guess === number) {
    displayMessage("You guessed it and won!!!");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //  When guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > number ? "Too high! ;)" : "Too loow ;)";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You Lost";
      document.querySelector(".score").textContent = 0;
    }
  }
  //   //  When guess is too High
  // } else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent =
  //       " Not really, your too high! try again...";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = " You Lost";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   // When guess is too Low
  // } else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent =
  //       " Tooooo looww man try again...";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = " You Lost";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

//Restore Gameplay function
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  //   document.querySelector(".number").textContent = number;
});
