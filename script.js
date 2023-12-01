"use strict";

let rock = document.querySelector(".rock");
let scissor = document.querySelector(".scissor");
let paper = document.querySelector(".paper");
let personChoice = document.querySelector(".chosen-option");
let pcChoice = document.querySelector(".pc-option");
let results = document.querySelector(".results");

//Generate random number
let n = Math.trunc(Math.random() * 3) + 1;
console.log(n);

let v = ["rock", "paper", "scissor"];
//function for pc casual choice

/*
let casualPcChoice = function () {
  let n = Math.trunc(Math.random() * 3);
  console.log(n);
  console.log(v[n]);

  pcChoice.src = `/img/photo-${v[n]}.png`;
};
*/

/*FUNZIONE VITO, PERSO, PAREGGIATO*/
let winFunction = () => {
  results.innerHTML = "YOU WIN";
};

let drawFunction = () => {
  results.innerHTML = "Draw";
};

let loseFunction = () => {
  results.innerHTML = "YOU LOSE";
};

//WIN. LOSE DRAW FUNCTIONS

//
rock.addEventListener("click", function () {
  personChoice.src = "/img/photo-rock.png";
  //casualPcChoice();
  let n = Math.trunc(Math.random() * 3);
  console.log(n);
  console.log(v[n]);
  pcChoice.src = `/img/photo-${v[n]}.png`;
  if (v[n] === "rock") drawFunction();
  if (v[n] === "scissor") winFunction();
  if (v[n] === "paper") loseFunction();
});

scissor.addEventListener("click", function () {
  personChoice.src = "/img/photo-scissor.png";
  //casualPcChoice();

  let n = Math.trunc(Math.random() * 3);
  console.log(n);
  console.log(v[n]);
  pcChoice.src = `/img/photo-${v[n]}.png`;
  if (v[n] === "rock") loseFunction();
  if (v[n] === "scissor") drawFunction();
  if (v[n] === "paper") winFunction();
});

paper.addEventListener("click", function () {
  personChoice.src = "/img/photo-paper.png";
  //casualPcChoice();

  let n = Math.trunc(Math.random() * 3);
  console.log(n);
  console.log(v[n]);
  pcChoice.src = `/img/photo-${v[n]}.png`;
  if (v[n] === "rock") winFunction();
  if (v[n] === "scissor") loseFunction();
  if (v[n] === "paper") drawFunction();
});
