//get the values for calculations
function getValues() {
  //get the values from the page
  var loanValue = document.getElementById("loanValue").value;
  var termValue = document.getElementById("termValue").value;
  var rateValue = document.getElementById("rateValue").value;

  //parse into Doubles
  var loanDouble = parseFloat(loanValue);
  var termDouble = parseFloat(termValue);
  var rateDouble = parseFloat(rateValue);

  //validate that entries are Doubles
  if (
    !Number.isNaN(loanDouble) &&
    !Number.isNaN(termDouble) &&
    !Number.isNaN(rateDouble)
  ) {
    amortize(loanDouble, termDouble, rateDouble);
  } else {
    alert("YOU MUST ENTER NUMBERS!");
  }
}

function amortize(loanDouble, termDouble, rateDouble) {
  let returnArray = []; //initialize an array
  var L = loanDouble.toFixed(2); //L = loaned ammount
  var R = rateDouble.toFixed(2); //R = rate entered as a double
  var T = termDouble.toFixed(2); //T = term in months
  var y = T / 12; //years = term in months / 12
  var r = R / 100000; //r = R converted into percentage rate
  var tip = 0; //tip = total interest payments
  var mip = 0; //mip = monthly interest payment
  var mpp = 0; //mpp = monthly principle payment
  var L = loanDouble;
  var i = L * r; //i = interest on the loaned amount
  var loanBalance = L; //starting value for the loop to use
  var r12 = R / 1200; //rate to calculate interest per month
  var mp = 0;

  //starting value for the loop to use
  var contractBalance = getContractBalance(L, i, y); 
  var tmp = ((L * r12) / (1 - (1 + r12) ** -T)).toFixed(2);
  contractBalance = (tmp * T).toFixed(2);

  //run algorithm and push results of each iteration into the array
  for (iterator = 0; iterator < T + 1; iterator++) {
    if (iterator > 0) {
      returnArray.push(
        `<tr><td>month #${iterator}</td>
        <td>payment = ${tmp}</td>
        <td>principle = ${mpp}</td>
        <td>interest = ${mip}</td>
        <td>total interest = ${tip}</td>
        <td>loan balance = ${loanBalance}</td>`
      );
    } else {
      returnArray.push(
        `<tr><td>month #${iterator}</td>
        <td>payment = ${0}</td>
        <td>principle = ${mpp}</td>
        <td>interest = ${mip}</td>
        <td>total interest = ${tip}</td>
        <td>loan balance = ${loanBalance}</td>`
      );
    }
    //math for next iteration
    mp = ((L * r12) / (1 - (1 + r12) ** -T)).toFixed(2);
    mip = (loanBalance * r12).toFixed(2);
    mpp = (tmp - mip).toFixed(2);
    loanBalance = (loanBalance - mpp).toFixed(2);
    contractBalance = (contractBalance - mpp).toFixed(2);
    tip = parseFloat(tip) + parseFloat(mip);
    tip = tip.toFixed(2);
  }
  displayData(returnArray);
}

//current total = (previous total + 1 year interest), 
//then previous total = current total... 
//loop for # of years (or term in months / 12)
function getContractBalance(L, i, y) {
  var ct = 0; //ct = current total
  var ci = 0; //ci = current interest
  var a = L + i; //a = loaned amount + interest

  for (iterator = 0; iterator < y; iterator++) {
    ct += a;
    ci = ct * i;
    ct += ci;
    a = 0;
    console.log(ct);
  }
  return ct;
}

//display the results stored in the array, line by line
function displayData(returnArray) {
  let templateRows = "";
  for (let i = 0; i < returnArray.length; i++) {
    let number = returnArray[i];
    templateRows += `${returnArray[i]}`;
  }
  document.getElementById("results").innerHTML = templateRows;
}

//resets the table
function resetTable() {
  let templateRows = "";
  document.getElementById("results").innerHTML = templateRows;
}
