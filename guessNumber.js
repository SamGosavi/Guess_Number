let randomNumber =parseInt( Math.random()*100+1)
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');  
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1 ;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
       const guess = parseInt(userInput.value);
       validateGuess(guess);
    })
}

function validateGuess(guess){
     if(isNaN(guess)){
        alert('Please Enter a Valid Number');
     }else if(guess<1){
        alert("Please Enter Number above 0");
     }else if(guess>100){
        alert("Please Enter Number below 100");
     }else{
        prevGuess.push(guess);
        if(numGuess>10){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
     }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Bingo...'${guess}' You Guessed it Right !!!`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage('This number is below Guess Number.')
    }else if(guess > randomNumber){
        displayMessage('This number is above Guess Number.')
    }
}
function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess},`;
    numGuess++ ;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'> Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt( Math.random()*100+1);         
        prevGuess = [];
        numGuess =1 ;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
        lowOrHi.innerHTML = ''
    })
   
}