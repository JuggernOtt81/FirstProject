function getValues() {
  //get the values from the page
  var loanValue = document.getElementById("loanValue").value;
  var termValue = document.getElementById("termValue").value;
  var rateValue = document.getElementById("rateValue").value;

  //parse into Doubles
  var loanDouble = parseFloat(loanValue).toFixed(2);
  var termDouble = parseFloat(termValue).toFixed(2);
  var rateDouble = parseFloat(rateValue).toFixed(2);

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
var returnArray = [];
function amortize(loanDouble, termDouble, rateDouble) {

  var payment = calcPayment(loanDouble, rateDouble, termDouble);
  var monthlyRate = 0.0;
  var balance = loanDouble;
  var totalInterest = 0;
  var monthlyInterest = 0;
  var monthlyPrinciple = 0;
  var monthlyRate = calcMonthlyRate(rateDouble);
  var fMonth = "";
  var newTotalInterest = 0;
  var newBalance = 0;

  for (let month = 0; month < termDouble; month++) {

    monthlyInterest = calcMonthlyInterest(balance, monthlyRate);
    totalInterest = calcTotalInterest(totalInterest, monthlyInterest);
    monthlyPrinciple = calcMonthlyPrinciple(payment, monthlyInterest);
    newBalance = calcNewBalance(balance, monthlyPrinciple);
    balance -= monthlyPrinciple;
    fMonth = (month + 1).toString();

    returnArray.push(
      `<tr>
      <td>#${fMonth}</td>
      <td>$${payment}</td>
      <td>$${monthlyPrinciple}</td>
      <td>$${monthlyInterest}</td>
      <td>$${totalInterest}</td>
      <td>$${newBalance}</td>
      </tr>`
    );
  }

  TotalInterest = totalInterest;
  TotalCost = loanDouble + totalInterest;

  displayData(returnArray);
}

function calcPayment(loanDouble, rateDouble, termDouble) {
  monthlyRate = calcMonthlyRate(rateDouble);
  var loan = loanDouble;
  var term = termDouble;
  var payment = (loan * monthlyRate) / (1 - (Math.pow(1 + monthlyRate, -term)));

  return payment.toFixed(2);
}

function calcMonthlyRate(rateDouble) {
  monthlyRate = rateDouble / 1200;
  return monthlyRate;
}

function calcMonthlyInterest(balance, monthlyRate) {
  monthlyInterest = balance * monthlyRate;
  return monthlyInterest.toFixed(2);
}

function calcMonthlyPrinciple(payment, monthlyInterest) {
  monthlyPrinciple = payment - monthlyInterest;
  return monthlyPrinciple.toFixed(2);
}

function calcTotalInterest(totalInterest, monthlyInterest) {
  let a = parseFloat(totalInterest);
  let b = parseFloat(monthlyInterest);
  let x = a + b;
  newTotalInterest = x.toFixed(2);

  return newTotalInterest;
}

function calcNewBalance(balance, monthlyPrinciple) {
  let x = balance - monthlyPrinciple;
  newBalance = parseFloat(x);

  return newBalance.toFixed(2);
}

function displayData(returnArray) {
  let templateRows = "";
  for (let i = 0; i < returnArray.length; i++) {
    templateRows += `${returnArray[i]}`;
  }
  document.getElementById("results").innerHTML = templateRows;
}

//resets the table
function resetTable() {
  let templateRows = "";
  document.getElementById("results").innerHTML = templateRows;
}