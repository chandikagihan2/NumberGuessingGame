
const guessInput = document.getElementById('guessInput');
const checkButton = document.getElementById('checkButton');
const message = document.getElementById('message');
const attempts = document.getElementById('attempts');
const restartButton = document.getElementById('restartButton');

let randomNumber = Math.floor(Math.random() * 10) + 1;

let attemptCount = 0;


checkButton.addEventListener('click', function () {

    const userGuess = Number(guessInput.value);

    if (guessInput.value === '') {
        message.textContent = 'Please enter a number!';
        return;
    }

    if (userGuess < 1 || userGuess > 10) {
        message.textContent = 'Enter a number between 1 and 10!';
        return;
    }

    attemptCount++;

    attempts.textContent = 'Attempts: ' + attemptCount;

    if (userGuess === randomNumber) {

        message.textContent = 'Congratulations! You Win!';

        checkButton.disabled = true;

    }
    else if (attemptCount === 3) {

        message.textContent = 'Game Over! Correct Answer: ' + randomNumber;

        checkButton.disabled = true;

    }
    else if (userGuess < randomNumber) {

        message.textContent = 'Too Low! Try a Higher Number.';

    }
    else {

        message.textContent = 'Too High! Try a Lower Number.';

    }

});

restartButton.addEventListener('click', function () {

    randomNumber = Math.floor(Math.random() * 10) + 1;

    attemptCount = 0;

    attempts.textContent = 'Attempts: 0';

    message.textContent = 'Good Luck!';

    guessInput.value = '';

    checkButton.disabled = false;

});

