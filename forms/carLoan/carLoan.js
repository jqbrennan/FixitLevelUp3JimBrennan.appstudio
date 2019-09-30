else if {
function carLoanPayment(principal, rate, periodMonths) {
  let payment = principal * (1 + (rate/100) * (periodMonths/12))
  let monthlyPayment = payment/periodMonths
  return monthlyPayment
  }

let carAmount = Number(prompt("What is the principal amount of the loan?"))
let carRate = Number(prompt("What is the percentage rate of the loan?"))
let carPeriod = Number(prompt("What is the period (in months) of the loan?"))

var carPayment = carLoanPayment(carAmount, carRate, carPeriod)
alert(`A car loan for $${carAmount} over ${carPeriod} months at ${carRate}% interest would have a monthly payment of $${carPayment}`)