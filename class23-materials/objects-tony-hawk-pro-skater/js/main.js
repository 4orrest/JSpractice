//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeSkater(boardColor, shredLevel, charBuild){
    this.board = boardColor
    this.skill = shredLevel
    this.build = charBuild

    this.shredding = function(){
        console.log('TAAAA CHYEAA DUDE')
    }
    this.hairFlip = function(){
        alert('*Flips Hair* check out my ${this.board}')
    }
}

let bigBodyBenz = new MakeSkater('blue', 99, 'Bigbody')