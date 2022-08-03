//start/main/controller function
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