//create arrary
let myAnimals = ["dog", "cat", "horse", "meerkat"]

//prompt user to enter animal
let userAnimal = prompt("Enter your animal")

//add user animal to arrary
let withUser = myAnimals.push([userAnimal])

//alert showing the last animal in the arrary
alert(`The last animal is a ${myAnimals[myAnimals.length - 1]}`)