var constructor = require('./car')
var car = new constructor('purple', true, 0)

// console.log(car.accelerate(40))
console.log(car.decelerate(20))
console.log(car.greeting())
// console.log(car.changeColor('Green'))
// console.log(car.color)
console.log(car.stop())
