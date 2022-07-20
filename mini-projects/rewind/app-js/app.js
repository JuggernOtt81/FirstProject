//start/main/controller function
function getValues(){
//get value(s) from the page
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

//logic function
function reverseString(userString){
//reverse the string    
    let revString = [];
    //reverse the string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    return revString;
}

//view function
function displayString(revString){
//display the reversed string    
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    document.getElementById("alert").classList.remove("invisible");
}