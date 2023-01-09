"use strict";
import { ball } from "./modules/Ball.js";
import { racketLeft, racketRight } from "./modules/Racket.js";

// Turn on timer after page loading
window.addEventListener("load", animate);

// Score counter, left\right
export let scoreLeft = document.getElementById("score-left");
export let scoreRight = document.getElementById("score-right");

// Start button
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", start);

// Begin to play
function start() {
  ball.loop();
}

// Initialization of rackets\ball
function init() {
  racketLeft.move();
  racketRight.move();
  ball.update();
}

// Timer
export function animate() {
  init();
  requestAnimationFrame(animate);
}

// Rackets controller
addEventListener("keydown", (e) => {
  e = e || window.event;
  const speed = 4;
  switch (e.key) {
    case "Shift":
      racketLeft.speedY = -speed;
      break;
    case "Control":
      racketLeft.speedY = speed;
      break;
    case "ArrowUp":
      racketRight.speedY = -speed;
      break;
    case "ArrowDown":
      racketRight.speedY = speed;
      break;
  }
});

addEventListener("keyup", (e) => {
  e = e || window.event;
  const speed = 0;
  switch (e.key) {
    case "Shift":
      racketLeft.speedY = speed;
      break;
    case "Control":
      racketLeft.speedY = speed;
      break;
    case "ArrowUp":
      racketRight.speedY = speed;
      break;
    case "ArrowDown":
      racketRight.speedY = speed;
      break;
  }
});
