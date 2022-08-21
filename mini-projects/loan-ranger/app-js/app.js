
//start or controller function(get the values from the page)
function getValues() {
  //get the values from the page
  var loanValue = document.getElementById("loanValue").value;
  var termValue = document.getElementById("termValue").value;
  var rateValue = document.getElementById("rateValue").value;

  //parse into Doubles
  var loanDouble = parseFloat(loanValue);
  var termDouble = parseFloat(termValue);
  var rateDouble = parseFloat(rateValue);

  //validate that entries are integers
  if (
    !Number.isNaN(loanDouble) &&
    !Number.isNaN(termDouble) &&
    !Number.isNaN(rateDouble)
  ) {
    //define numbers by calling loanTerm funtion
    amortize(loanDouble, termDouble, rateDouble);
  } else {
    alert("YOU MUST ENTER NUMBERS!");
  }
}

//build the array of results
function amortize(loanDouble, termDouble, rateDouble) {
  //init the returnArray
  let returnArray = [];
    
  let l = loanDouble;
  let R = rateDouble;
  let t = termDouble;
  let y = (t / 12);
  let r = (R / 100000);
  let i = l * r;
  let ct = 0;
  let ci = 0;
  let a = l + i;

  for(iterator = 0; iterator < y; iterator++){
    ct += a;
    ci = ct * i;
    ct += ci;
    a = 0;
  }
  let p = ct / t;
  let ir = p / 300;
  let ti = 0;
  let remainingBalance = ct;  
  let mi = 0;
  let mp = 0;
  let loanBalance = l;
  
  for(iterator = 0; iterator < t; iterator++){
    if(iterator > 0){
      console.log(`month #${iterator} | payment = ${p} | principle = ${mp} | interest = ${mi} | total interest = ${ti} | loan balance = ${loanBalance} | total of payments = ${remainingBalance} |`);
    }
    else{
      console.log(`month #${iterator} | payment = 0 | principle = ${mp} | interest = ${mi} | total interest = ${ti} | loan balance = ${loanBalance} | total of payments = ${remainingBalance} |`);
    }
    
    
    mi = loanBalance / 300;
    ti += mi;
    mp = p - mi;    
    remainingBalance -= p;
    loanBalance -= mp;
  }

//Math.round((num + Number.EPSILON) * 100) / 100

  
  //pass the array to the displayData function
  displayData(returnArray);
}

//dynamically display table, width based on termDouble
function displayData(fbArray) {
  //loop over the array create a tablerow for each item.
  let templateRows = "";
  for (let i = 0; i < fbArray.length; i++) {
    var z = "";
    //loop over the row defined by termDouble
    for (let x = 0; x < termDouble; x++) {
      z += `<td>${fbArray[i+x]}</td>`;
    }
    templateRows += `<tr>${z}</tr>`;
    i += termDouble-1;
  }
  document.getElementById("results").innerHTML = templateRows;
}

//resets the table
function resetTable() {
  let templateRows = "";
  document.getElementById("results").innerHTML = templateRows;
}