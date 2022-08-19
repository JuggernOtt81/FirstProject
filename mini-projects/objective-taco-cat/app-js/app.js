function getValues(){
    let userString = document.getElementById("userString").value;

    //check palindrome
    let returnObject = checkForPalindrome(userString);

    //display message
    displayMessage(returnObject);
}

function checkForPalindrome(userString){

    userString = userString.toLowerCase();

    let regex = /[^a-z0-9]/gi;

    userString = userString.replace(regex,"");

    let revString = [];
    let returnObject = {};

    for (let i = userString.length -1; i >= 0; i--){
        revString += userString[i];
    }

    if (revString == userString){
        let check = `<i class="fas fa-check" style="color: green; font-size="larger;"></i>`;
        returnObject.header = `${check}     PALINDROME DETECTED!     ${check}`;
        returnObject.msg = ` IS a palindrome of `

    }
    else{
        let xMark = `<i class="fa-solid fa-x" style="color: red; font-size="larger;></i>`;
        returnObject.header = `${xMark}     no palindrome found     ${xMark}`;
        returnObject.msg = ` is NOT palindrome of `
    }

    returnObject.original = userString;
    returnObject.reversed = revString;

    return returnObject;
}

//display
function displayMessage(returnObject){
    document.getElementById("alertHeader").innerHTML = returnObject.header;
    document.getElementById("msg").innerHTML = `<strong>${returnObject.reversed}</strong>
    ${returnObject.msg} 
    <strong>${returnObject.original}</strong>`;
    document.getElementById("alert").classList.remove("invisible");
}




























/* //start/main/controller function
function palindrome() {
    let palindromeString = `not set`;
    let uString = getValues();
    let rString = reverseString();
    if (rString == uString) {
        palindromeString = `<i class="fas fa-check" style="color: green; font-size="larger;"></i>   ${reverseString()} IS a palindrome of ${getValues()}   <i class="fas fa-check" style="color: green; font-size="larger;"></i>`;
    }
    else {
        palindromeString = `<i class="fa-solid fa-x" style="color: red; font-size="larger;></i>   ${
            reverseString()
        } is NOT a palindrome of ${
                getValues()
            }   <i class="fa-solid fa-x" style="color: red; font-size="larger;></i>`;
    };
    displayString(palindromeString);
}

//get the value from the page
function getValues() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, ``);
    return userString;
}

//logic function
function reverseString() {
    //reverse the string    
    let uString = getValues();
    
    let revString = [];
    //reverse the string using a for loop  
    for (let index = uString.length - 1; index >= 0; index--) {
        revString += uString[index];
    }
    return revString;
}

//view function
function displayString(palindromeString) {
    //display the reversed string   
    document.getElementById("msg").innerHTML = `${palindromeString}`;
    document.getElementById("alert").classList.remove("invisible");
}

//temporary view function
function displayString(palindromeString) {
    //display the reversed string   
    document.getElementById("msg").innerHTML = `oh no! the object based version isn't done yet. please check back later. - in the meantime, have fun with the ORIGINAL Taco Cat, or other items by clicking "HOME".`;
    document.getElementById("alert").classList.remove("invisible");
} */