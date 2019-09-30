if (decision == car) {
function homeLoanPayment(principal, rate, periodYears) {
  let payment = principal * (1 + (rate/100) * periodYears)
  let monthlyPayment =  payment/(periodYears * 12)
  return monthlyPayment
  }

let homeAmount = Number(prompt("What is the principal amount of the loan?"))
let homeRate = Number(prompt("What is the percentage rate of the loan?"))
let homePeriod = Number(prompt("What is the period (in years) of the loan?"))

var homePayment = homeLoanPayment(homeAmount, homeRate, homePeriod)
alert(`A home loan for ${homeAmount} dollars over ${homePeriod} years at ${homeRate}% interest would have a monthly payment of ${homePayment}`)
}