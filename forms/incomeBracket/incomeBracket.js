//define variable
let taxBracket = ""

//define function
function Choose (num1) {
  if (num1 <= 30000) {
  let taxBracket = "8%"
  } else if (num1 <= 99999) {
  let taxBracket = "15%"
} else {
  let taxBracket = "25%"
  }
  return taxBracket
}

//user clicks submit button 
btnSubmit.onclick=function(){
  lblOut.value = (`With your income of ${inptIncome}, you are in a tax bracket of ${Choose(inptIncome.value)})
}

//user clicks fo again button
btnGo.onclick=function(){
  inptIncome.value = ""
}
