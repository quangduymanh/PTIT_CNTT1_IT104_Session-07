abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract makeNoise(): void;

    printName(): void {
        console.log(`Tên: ${this.name}`);
    }
}

class Cat extends Animal {
    makeNoise(): void {
        console.log("Meo meo");
    }
}

class Dog extends Animal {
    makeNoise(): void {
        console.log("Gâu gâu");
    }
}

const myCat = new Cat("Mèo Mun");
const myDog = new Dog("Cún Vàng");

myCat.printName();
myCat.makeNoise();

myDog.printName();
myDog.makeNoise();
