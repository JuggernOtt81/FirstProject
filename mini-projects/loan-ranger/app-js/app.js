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
    amortize(loanDouble, termDouble, rateDouble);
  } else {
    alert("YOU MUST ENTER NUMBERS!");
  }
}

function amortize(loanDouble, termDouble, rateDouble) {
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
  var contractBalance = getContractBalance(L, i, y); //starting value for the loop to use
  var tmp = ((L * r12) / (1 - (1 + r12) ** -T)).toFixed(2);
  contractBalance = (tmp * T).toFixed(2);

  for (iterator = 0; iterator < T + 1; iterator++) {
    if (iterator > 0) {
      console.log(
        `month #${iterator} | payment = ${tmp} | principle = ${mpp} | interest = ${mip} | total interest = ${tip} | loan balance = ${loanBalance}`);
    }
    else{
      console.log(
        `month #${iterator} | payment = ${0} | principle = ${0} | interest = ${0} | total interest = ${0} | loan balance = ${loanBalance}`);
    }

    mp = ((L * r12) / (1 - (1 + r12) ** -T)).toFixed(2);
    mip = (loanBalance * r12).toFixed(2);
    mpp = (tmp - mip).toFixed(2);
    loanBalance = (loanBalance - mpp).toFixed(2);
    contractBalance = (contractBalance - mpp).toFixed(2);
    tip = parseFloat(tip) + parseFloat(mip);
    tip = tip.toFixed(2);
  }
}

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
