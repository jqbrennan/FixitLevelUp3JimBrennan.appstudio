function carLoanPayment(principal, rate, periodMonths) {
  let payment = principal * (1 + (rate/100) * (periodMonths/12))
  return payment
  }

let carAmount = Number(prompt("What is the principal amount of the loan?"))
let carRate = Number(prompt("What is the percentage rate of the loan?"))
let carPeriod = Number(prompt("What is the period (in months) of the loan?"))

var carPayment = carLoanPayment(carAmount, carRate, carPeriod)
alert(carPayment)