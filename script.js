'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🥳 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
//console.log(document.querySelector('.guess').value);
console.log((document.querySelector('.guess').value = 25));
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener(
  'click',
  function (event) {
    const guess = Number(document.querySelector('.guess').value);

    //When there is no input or wrong input
    if (!guess) {
      //document.querySelector('.message').textContent = '⛔ NO NUMBER!!';
      displayMessage('⛔ NO NUMBER!!!');

      //When player wins
    } else if (guess === secretNumber) {
      //document.querySelector('.message').textContent = '🥳 CORRECT NUMBER!';
      displayMessage('🥳 CORRECT NUMBER!');
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        //   guess > secretNumber ? '📈 TOO HIGH' : '📈 TOO LOW';
        displayMessage(guess > secretNumber ? '📈 TOO HIGH' : '📈 TOO LOW');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        //document.querySelector('.message').textContent = 'YOU LOST THE GAME 😩';
        displayMessage('YOU LOST THE GAME 😩');
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.score').textContent = 0;
      }
    }
  }

  //   //When the guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 TOO HIGH';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'YOU LOST THE GAME 😩';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When the guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 TOO LOW';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'YOU LOST THE GAME 😩';
  //     document.querySelector('.score').textContent = 0;
  //   }
);
