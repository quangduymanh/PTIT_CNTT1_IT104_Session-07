"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Tên: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("Meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("Gâu gâu");
    }
}
const myCat = new Cat("Mèo Mun");
const myDog = new Dog("Cún Vàng");
myCat.printName();
myCat.makeNoise();
myDog.printName();
myDog.makeNoise();
