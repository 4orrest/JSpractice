//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine{
    constructor(color, make, model, price){
        this.color = color
        this.make = make
        this.model = model
        this.price = price
    }
    turnOn(){
            alert('POWERING UP')
        }
    steam(){
        alert('IM STEAMING')
    }
    brew(){
        alert('ESPRESSO INCOMING!')
    }
}

let gaggia = new EspressoMachine('red', 'Gaggia', 'Classic Pro', 400)