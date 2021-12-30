

'use strict';
// document.querySelector('.message').textContent =  'correct Number!';
// console.log(document.querySelector('.message').textContent);
//  document.querySelector('.number').textContent = '13';
//  document.querySelector('.score').textContent = '10';
//  document.querySelector('.guess').value = 20;
//  console.log(document.querySelector('.guess').value = 20);

var number=Math.trunc(Math.random()*20)+1;
const displayMessage = function(message)
{
    document.querySelector('.message').textContent=message;
}
let score= 20;
let highscore=0;
document.querySelector('.check').addEventListener('click',function ()
{
    const guess = Number(document.querySelector('.guess').value);
console.log( guess,typeof guess);
// when no number is entered
if (!guess)
{
    displayMessage( '⛔️ No number!');
}
// when the guess is correct
else if (guess===number)
{
    displayMessage('correct number 🎉');
    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent=number;
if (score>highscore)
{
    highscore=score;
    document.querySelector('.highscore').textContent=highscore;
}
}



// // when guess is greater than number
// else if (guess>number)
// {
//     if (score>1)
//     {
//         document.querySelector('.message').textContent='too high 📈';
//         score--;
//         document.querySelector('.score').textContent=score;

//     }
//     else{
//         document.querySelector('.message').textContent = 'you lost the game';
//         document.querySelector('.score').textContent = 0;


//     }
    
// }
// //when guess is less than number 
// else if (guess<number)
// {
//     if (score>1)
//     {
// document.querySelector('.message').textContent='Too low ⬇️';
// score--;
// document.querySelector('.score').textContent=score;

//     }
//     else{
//         document.querySelector('.message').textContent = 'you lost the game';
//         document.querySelector('.score').textContent = 0;

//     }
    
// }
// });


//refactoring above
//when guess is wrong
else if (guess!== number)
{
    if (score>1)
    {
        displayMessage(guess > number ? 'Too high 📈':' Too low ⬇️');
        score--;
    document.querySelector('.score').textContent=score;
    }
    else
    {
    displayMessage('you lost the game');
    document.querySelector('.score').textContent = 0;


    }
    }

document.querySelector('.again').addEventListener('click',function()
{
    score=20;
    number=Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
   
})
})