'use strict';
//selecting the html elements
const currscore0L = document.getElementById('current--0'); // current score
const currscore1L = document.getElementById('current--1');
const score0L = document.querySelector('#score--0'); //global score
const score1L = document.getElementById('score--1');
const diceL = document.querySelector('.dice');
const rollbtn = document.querySelector('.btn--roll');
const newbtn = document.querySelector('.btn--new');
const holdbtn = document.querySelector('.btn--hold');
const player0L = document.querySelector('.player--0');
const player1L = document.querySelector('.player--1');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
score0L.textContent = 0;
score1L.textContent = 0;

diceL.classList.add('hidden');

//switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0; /// to witch player
  player0L.classList.toggle('player--active');
  player1L.classList.toggle('player--active');
};

//const diceVal = Math.trunc(Math.random() * 6 + 1);

//Rolling dice functionality
rollbtn.addEventListener('click', function () {
  //random no generate
  if (playing) {
    let diceVal = Math.trunc(Math.random() * 6) + 1;

    //display dice
    diceL.classList.remove('hidden');
    diceL.src = `dice-${diceVal}.png`;
    //if diceVal is 1 switch player otherwise update score
    if (diceVal !== 1) {
      //add diceVal to current score
      currentScore = currentScore + diceVal;
      console.log(currentScore);
      //we select the element dynamically
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switching player if dice is 1
      switchPlayer();
    }
  }
});
//hold button functionality
holdbtn.addEventListener('click', function () {
  if (playing) {
    //add currentscore  to the socre of player
    scores[activePlayer] += currentScore;
    //mke current score 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //display global score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if player'sscore is >=100
    if (scores[activePlayer] >= 50) {
      playing = false;
      diceL.classList.add('hidden');
      //finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    }
    //swicth to the next player
    else {
      switchPlayer();
    }
  }
});

newbtn.addEventListener('click', function () {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];
  currscore0L.textContent = 0;
  currscore1L.textContent = 0;
  score0L.textContent = 0;
  score1L.textContent = 0;
  diceL.classList.add('hidden');

  player0L.classList.remove('player--winner');
  document;
  player1L.classList.remove('player--winner');
  player0L.classList.remove('player--active');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add(`player--active`);
});
