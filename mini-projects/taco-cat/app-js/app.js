//start or controller function(get the values from the page)
var myTacoCatForm = document.getElementById('myTacoCatForm');
var wordInput = document.getElementById('wordInput');
var answer = document.getElementById('answer');

myTacoCatForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var userInput = wordInput.value.toLowerCase().replace(/\s|\'|\"/g, '');
    answer.innerHTML = isPalindrome(userInput);


    if (isPalindrome(userInput) == false) {
        $("#answerAppend").html(userInput + " is NOT the reverse of " + wordInput.value + ".");
    }
    else {
        $("#answerAppend").html(userInput + " IS the reverse of " + wordInput.value + ".");
    }
});

function isPalindrome(userInput) {
    for (i = 0; i <= (userInput.length / 2); i++) {
        if (userInput[i] != userInput[(userInput.length - 1 - i)]) {
            return false;
        }
    }
    return true;
}