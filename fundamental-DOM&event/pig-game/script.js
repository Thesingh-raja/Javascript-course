'use strict';
//selecting elements
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
//starting conditions
let scores,currentScore,activePlayer,playing;
const init=function(){
 scores=[0,0];
 currentScore=0;
 activePlayer=0;
 playing=true;

score0El.textContent=0;
score1El.textContent=0;
current0El.textContent=0;
current1El.textContent=0;

diceEl.classList.add('hidden');
player0El.classList.remove(`player--winner`);
player1El.classList.remove(`player--winner`);
player0El.classList.add(`player--active`);
player1El.classList.remove(`player--active`);
};
init();

 // switch player
 const switchPlayer= function(){ document.getElementById(`current--${activePlayer}`).textContent=currentScore;
 currentScore=0;
 activePlayer= activePlayer===0? 1: 0;
 player0El.classList.toggle('player--active');
 player1El.classList.toggle('player--active');
    }
// rolling dice functionality
btnRoll.addEventListener('click',function(){
    if (playing)
    {
//1) generating random dice roll
const dice = Math.trunc(Math.random()*6)+1;
//display dice
console.log(dice);
diceEl.classList.remove('hidden');
diceEl.src=`dice-${dice}.png`;
if(dice!==1)
{
    // add current score
currentScore+=dice;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;
}
else{
   switchPlayer();
}
    }

})

btnHold.addEventListener('click',function()
{
    if (playing) {
    console.log('Hold button');
    // add current score to score of active player
scores[activePlayer]+=currentScore;
console.log(scores[activePlayer]);
document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer];
    // check if player's score >= 100?
    if (scores[activePlayer]>= 20)
    {
        playing=false;
diceEl.classList.add('hidden');

        document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
        document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
    }
    //finish the game


else{
    //switch player
    switchPlayer();
}}

})

btnNew.addEventListener('click', init);