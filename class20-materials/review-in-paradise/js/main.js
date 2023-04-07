// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = pizza

let favFood = pizza

alert(favFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let 

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNums(num1, num2, num3){
    alert((num1 / num2) * num3)
}

threeNums(3,1,3)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function numbah(num){
    let cubeRoot = Math.cbrt(num)
}

numbah(27)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
let monthLowerCase = month.toLowerCase()

function month(mon){
    if(monthLowerCase === 'june' || monthLowerCase === 'july' || monthLowerCase === 'august')
    alert('Yay')
}else(){
    alert('boo')
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skip(num){
    for(i = 1; i <= num; i++)
    if (i % 5 !== 0){
        console.log(i)
    }
}