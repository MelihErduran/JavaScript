const actualNumber = Math.floor(Math.random() * (100));
alert(actualNumber);
let userGuess = prompt('What is the Secret Number?');
let guessNumber = Number(userGuess);
let userAttempts = 1;
let gameBeaten = false;
while (gameBeaten == false) {
    if(!Number.isNaN(guessNumber)) {
        while (guessNumber != actualNumber) {
            if (userAttempts < 5){
                if (guessNumber < actualNumber) {
                guessNumber = prompt('Go Higher!')
                userAttempts ++;
                } else if (guessNumber > actualNumber) {
                guessNumber = prompt('Go Lower!')
                userAttempts ++;
                } else if (guessNumber == actualNumber){
                    gameBeaten = true;
                }
            } else if (userAttempts >= 5) {
                alert('Game Over, You Have Passed 5 Attempts');
            }
        };  
    } else {
        alert('It has to be a number');
    }
}
if (userAttempts == 1) {
    alert('Congrats, You Have Guessed and Beaten the Computer. It Took You ' + userAttempts + ' Try!');
} else {
    alert('Congrats, You Have Guessed and Beaten the Computer. It Took You ' + userAttempts + ' Tries!');
}
