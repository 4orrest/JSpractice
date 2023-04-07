// *Variables*
// Declare a variable, assign it a value, and alert the value
let kek = 10
alert(kek)
// Create a variable, divide it by 10, and console log the value
let numbah = 10
console.log(numbah / 10)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multi(num1, num2, num3){
    alert(num1 * num2 * num3)
}
multi(2, 2, 2)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNumbs(num1, num2, num3, num4){
    alert((num1 + num2) - num3 - num4)
}
fourNumbs(5, 5, 5, 5)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNumbs(num1, num2, num3){
    if((100 + num1) - num2 / num3 > 25){
        alert('WE HAVE A WINNAA')
    }
}
threeNumbs(1, 50, 3)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function weekendCheckor(){
    
}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
