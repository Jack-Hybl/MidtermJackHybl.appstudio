//create function
function calcAvgSquare (num1, num2, num3) {
  return ((num1 + num2 + num3)/3) * (num1 * num1)
}

//get user numbers
let x = prompt('Enter 1st number')
let y = prompt('Enter 1st number')
let z = prompt('Enter 1st number')

//call function
let answer = calcAvgSquare(Number(x),Number(y), Number(z))

//alert with answer
alert(`The answer is ${answer}.`)
                                  