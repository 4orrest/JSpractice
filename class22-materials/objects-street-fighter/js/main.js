//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(characterName, characterFightStyle, characterPower){
    this.make = characterName
    this.make = characterFightStyle
    this.make = characterPower

    this.createCharacter = function(){
        alert('Your characer has been made')
    }
}

let bigBodyBenz = new StreetFighter('bigBodyBenz', 'Taikwando', '9000')