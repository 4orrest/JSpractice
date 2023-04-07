// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let yessir = 'I like pie'

alert( yessir.endsWith('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let okay = 'I am a jr. dev'
console.log(okay.replaceAll('jr. dev', 'software engineering'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
 function RPS(){
    randomNum = Math.random() * 100
    if(randomNum <= 33){
        console.log('rock')
    }else if(randomNum <= 66){
        console.log('paper')
    }else{
        console.log('scissors')
    }
 }
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function shoot(choice){
    let botChoice = RPS()
    if(choice === 'scissors' && botChoice === 'paper'){
        alert('You win!')
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
