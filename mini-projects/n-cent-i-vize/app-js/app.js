//start or controller function(get the values from the page)
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;    
    let endValue = document.getElementById("endValue").value;

    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);   

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //call generateNumbers()
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers
        displayNumbers(numbers);
    }
    else{
        alert("YOU MUST ENTER INTEGERS!");
    }
}
//generate numbers from the start value to the end value
//logic function(s)
function generateNumbers(startValue, endValue){
    let numbers = [];
    for (let i = startValue; i <= endValue; i++){
        //this will execute in a loop until i = endValue
        numbers.push(i);
    }
    return numbers;
}
//display the numbers, and mark the EVEN numbers BOLD
//display or view function(s)
function displayNumbers(numbers){
    let templateRows = "";
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        
        if(number % 2 == 0){
            className = "even";
        }else
        {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}
function resetTable(){
    let templateRows = "";
    document.getElementById("results").innerHTML = templateRows;
}

//