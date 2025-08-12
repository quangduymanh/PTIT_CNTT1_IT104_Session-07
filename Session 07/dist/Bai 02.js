"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`${this.name} đã giảm tốc, tốc độ hiện tại: ${this.speed} km/h`);
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`${this.name} đã tăng tốc, tốc độ hiện tại: ${this.speed} km/h`);
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại của ${this.name}: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Tên xe: ${this.name}`);
        console.log(`Tốc độ: ${this.speed} km/h`);
        console.log(`Mã ID: ${this.id}`);
        console.log(`Số bánh răng: ${this.gear}`);
    }
}
const bike = new Bicycle("Xe đạp thể thao", 10, "B001", 6);
bike.showSpeed();
bike.speedUp(5);
bike.slowDown(3);
bike.showInfo();
