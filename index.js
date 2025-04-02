// Your code here
`use strict`;

// const dodger = document.getElementById("dodger");

// dodger.style.backgroundColor = "#FF69B4";

// dodger.style.bottom = "0px";

// dodger.style.left = "0px";

// document.addEventListener("keydown", function (event) {
//    if (event.key === "ArrowLeft") {
//      const leftNumbers = dodger.style.left.replace("px", "");
//      const left = parseInt(leftNumbers, 10);
 
//      dodger.style.left = `${left - 1}px`;
//    }
//  });

// Dette er koden man skulle kopiere fra GitHub oppgaven:
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
   const leftNumbers = dodger.style.left.replace("px", "");
   const left = parseInt(leftNumbers, 10);
   if (left > 0) {
     dodger.style.left = `${left - 20}px`;
     handleCollision();
   } else {
     playGameOverSound();
   }
}

function moveDodgerRight() {
   const leftNumbers = dodger.style.left.replace("px", "");
   const left = parseInt(leftNumbers, 10);
   if (left < 360) {
     dodger.style.left = `${left + 20}px`;
     handleCollision();
   } else {
     playGameOverSound();
   }
}

function moveDodgerUp() {
   const bottomNumbers = dodger.style.bottom.replace("px", "");
   const bottom = parseInt(bottomNumbers, 10);
   if (bottom < 360) {
     dodger.style.bottom = `${bottom + 20}px`;
     handleCollision();
   } else {
     playGameOverSound();
   }
 }

 function moveDodgerDown() {
   const bottomNumbers = dodger.style.bottom.replace("px", "");
   const bottom = parseInt(bottomNumbers, 10);
   if (bottom > 0) {
     dodger.style.bottom = `${bottom - 20}px`;
     handleCollision();
   } else {
     playGameOverSound();
   }
 }

 document.addEventListener("keydown", function (e) {
   if (e.key === "ArrowLeft") {
     moveDodgerLeft();
     playSoundOnMovement()
   }
   if (e.key === "ArrowRight") {
     moveDodgerRight();
     playSoundOnMovement()
   }
   if (e.key === "ArrowUp") {
     moveDodgerUp();
     playSoundOnMovement()
   }
   if (e.key === "ArrowDown") {
      moveDodgerDown();
      playSoundOnMovement()
    }
 });

 const movementSound = document.getElementById("movementSound");

 function playSoundOnMovement() {
   movementSound.currentTime = 0;
   movementSound.play();
 }

 const gameoverSound = document.getElementById("gameoverSound");

 function playGameOverSound() {
   gameoverSound.currentTime = 0;
   gameoverSound.play();
 }

 function centerDodger() {
   const game = document.getElementById("game");
   const dodger = document.getElementById("dodger");
 
   const gameHeight = game.offsetHeight;
   const gameWidth = game.offsetWidth;
   const dodgerHeight = dodger.offsetHeight;
   const dodgerWidth = dodger.offsetWidth;
 
   const centerBottom = (gameHeight - dodgerHeight) / 2;
   const centerLeft = (gameWidth - dodgerWidth) / 2;
 
   dodger.style.bottom = `${centerBottom}px`;
   dodger.style.left = `${centerLeft}px`;
 }
 centerDodger();

 function placeTarget() {
   const game = document.getElementById("game");
 
   const gameWidth = game.offsetWidth;
   const gameHeight = game.offsetHeight;
   const targetWidth = target.offsetWidth;
   const targetHeight = target.offsetHeight;
 
   const randomLeft = Math.floor(Math.random() * (gameWidth - targetWidth));
   const randomBottom = Math.floor(Math.random() * (gameHeight - targetHeight));
 
   target.style.left = `${randomLeft}px`;
   target.style.bottom = `${randomBottom}px`;
 }
 
 function checkCollision() {
   const dodgerRect = dodger.getBoundingClientRect();
   const targetRect = target.getBoundingClientRect();
 
   return !(
     dodgerRect.right < targetRect.left ||
     dodgerRect.left > targetRect.right ||
     dodgerRect.bottom < targetRect.top ||
     dodgerRect.top > targetRect.bottom
   );
 }
 
 function handleCollision() {
   if (checkCollision()) {
     placeTarget();
   }
 }
 
 placeTarget();