function getPayments(loan) {
  loan.payment = calcPayment(loan.amount, loan.rate, loan.term);

  let balance = loan.amount;
  let totalInterest = 0;
  let monthlyInterest = 0;
  let monthlyPrinciple = 0;
  let monthlyRate = calcMonthlyRate(loan.rate);

  for (let month = 0; month < loan.term; month++) {
    monthlyInterest = calcMonthlyInterest(balance, monthlyRate);
    totalInterest += monthlyInterest;
    monthlyPrinciple = loan.payment - monthlyInterest;
    balance -= monthlyPrinciple;

    let loanPayment = {
      month: month + 1,
      payment: loan.payment,
      monthlyPrinciple: monthlyPrinciple,
      monthlyInterest: monthlyInterest,
      totalInterest: totalInterest,
      balance: balance
    };

    loan.payments.push(loanPayment);
  }

  loan.totalInterest = totalInterest;
  loan.totalCost = loan.amount + totalInterest;

  return loan;
}

function calcPayment(amount, rate, term) {
  let monthlyRate = calcMonthlyRate(rate);
  let rateD = monthlyRate;
  let amountD = amount;

  let paymentD = (amountD * rateD) / (1 - Math.pow(1 + rateD, -term));

  return paymentD;
}

function calcMonthlyRate(rate) {
  return rate / 1200;
}

function calcMonthlyInterest(balance, monthlyRate) {
  return balance * monthlyRate;
}
