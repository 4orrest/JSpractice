// *Variables*
// Create a variable and console log the value
let kek = 10
console.log(kek)
// Create a variable, add 10 to it, and alert the value
let numbah = 10
alert(numbah + 10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(num1, num2, num3, num4){
    alert(num1 - num2 - num3 - num4)
}
// Create a function that divides one number by another and returns the remainder
    function division(num1, num2){
        let modulo = num1 % num2
        alert(modulo)
    }
    division(9, 3)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
    function addTwoNumbs(num1, num2){
        if(num1 + num2 > 50){
            alert('Jumanji!')
        }
    }
    addTwoNumbs(48, 1)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multi(num1, num2, num3){
    if((num1 * num2 * num3) % 3 === 0){
        alert('ZEBRA!!!')
    }
}
multi(51, 19, 685)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function numberz(eating, num1){
    let repeat = for(i = 0; i < num1; i++){
        console.log(eating)
    }
}