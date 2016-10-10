
function Car (color, convertible, speed) {
  this.color = color
  this.convertible = convertible
  this.speed = speed
  this.greeting = function () {
    return 'The ' + this.color + ' car\'s current speed is ' + this.speed
  }
  // this.accelerate = function (no) {
  //   var oldSpeed = speed
  //   this.speed += no
  //   return 'Old speed: ' + oldSpeed + ' New Speed: ' + this.speed
  // }
  this.decelerate = function (no) {
    var oldSpeed = speed
    this.speed -= no
    console.log('Old speed: ' + oldSpeed + ' New Speed: ' + this.speed)
  }
  // this.changeColor = function (color) {
  //   this.color = color
  //   return 'The color of the car has been changed to ' + this.color
  // }
  this.stop = function () {
    this.speed = 0
    return 'The car has stopped.'
  }
}

module.exports = Car
