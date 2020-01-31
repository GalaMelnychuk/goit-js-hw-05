// Напиши класс Car с указанными свойствами и методами.

class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
    );
  }

  constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  set price(price) {
    this._price = price;
  }

  get price() {
    return this._price;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed)
    this.speed += value;
  }

  decelerate(value) {
    if (this.speed - value >= 0)
    this.speed -= value;
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    this.hours = hours;
    if (this.isOn = true) {
    this.distance = this.hours * this.speed;
  }
}
};

const mustang = new Car({ maxSpeed: 200, price: 2000 });

console.log(mustang);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
