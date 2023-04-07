//Create a constructor with 4 properties and 3 methods
function PizzaMaker(type, shape, toppings, cost){
    this.type = type
    this.shape = shape
    this.toppings = toppings
    this.cost = cost

    this.pay = function(){
        alert(`Time to pay, the price is ${this.cost}`)
    }
    this.makePizza = function(){
        alert(`Let me cook. This ingredients are ${this.toppings}`)
    }  
}

let pizza = new PizzaMaker('pineapple', 'large', ['spinach', 'tomato'], 12.99)