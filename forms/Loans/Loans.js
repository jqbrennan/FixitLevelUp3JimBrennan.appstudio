do {
  let decision = prompt("enter car for a car loan or home for a home loan")
  if (decision == "home") {
    function homeLoanPayment(principal, rate, periodYears) {
      let payment = principal * (1 + (rate/100) * periodYears)
      let monthlyPayment =  payment/(periodYears * 12)
      return monthlyPayment
    }

    let homeAmount = Number(prompt("What is the principal amount of the loan?"))
    let homeRate = Number(prompt("What is the percentage rate of the loan?"))
    let homePeriod = Number(prompt("What is the period (in years) of the loan?"))

    var homePayment = homeLoanPayment(homeAmount, homeRate, homePeriod)
    alert(`A home loan for $${homeAmount} over ${homePeriod} years at ${homeRate}% interest would have a monthly payment of $${homePayment}`)
  } else if (decision == "car") {
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
  }
  var ending = prompt("Enter end to end the program or enter anything else to continue")
}
while (ending != "end")