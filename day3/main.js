// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//     }
// }
// const dog = new Animal("rexy", 4)
// console.log(dog.name)

// class Human{
//     constructor(name, age, friendly) {
//         this.name = name
//         this.age = age
//         this.isFriendly  = friendly
//     }
// }

// const dan = new Human('dan', 30, true)
// console.log(dan);

// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//         this.children = []
//     }

//     giveBirth(name){
//         console.log("Boom. Birthed " + name)
//         this.children.push(name)
//     }
// }
// const cat = new Animal("Puss", 4)
// cat.giveBirth("Dolly")
// console.log(cat.children)

// class Vehicle {
//    // static carsSold = 0
//     constructor(x, y, speed, fuel) {
//         this.x = x
//         this.y = y
//         this._speed = speed
//         this._fuel = fuel
//         Vehicle.carsSold++;
//     }
//     static getInfo() {
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//     }
//     static calculateMoney(){
//         console.log( `Made ${Vehicle.carsSold*30000} dollars`);
//     }
//     set speed(speed) {
//         if (speed < 0) {
//             return console.log("Speed must be positive")
//         }
//         this._speed = speed
//     }
//     get speed(){
//         return this._speed
//     }
//     set fuel(fuel) {
//         if (fuel < 0 || fuel > 150) {
//             return console.log("Fuel must be positive and under 150")
//         }
//         this._fuel = fuel
//     }
//     get fuel(){
//         return this._fuel
//     }
// }
// // const ferari = new Vehicle(1,2,3)
// // const ford = new Vehicle(1,0,60)
// // const nissan = new Vehicle(0,2,70)
// // Vehicle.calculateMoney()
// Vehicle.carsSold = 0
// const c = new Vehicle()
// c.x = 3
// c.y = 1
// c.fuel = 15
// console.log(c.fuel) // prints undefined

class LuxuryFeeder {
    getFood(animalType) {
        if (animalType == "lion") {
            return "chia seeds"
        }
        if (animalType == "elephant") {
            return "peanuts"
        }

        return "scraps"
    }
}

class CheapFeeder {
    getFood(animalType) {
        return "scraps"
    }
}

class Animal {
    constructor(name, type, feeder) {
        this.name = name
        this.type = type
        this.feeder = feeder 
    }

    _consume(food) {
        console.log("Just consumed " + food + ". Feels good.")
    }

    eat() {
        const food = this.feeder.getFood(this.type)
        this._consume(food)
    }
}

const weArePoor = false
const newLion = new Animal('simba', 'lion', weArePoor?new CheapFeeder():new LuxuryFeeder())
newLion.eat()
