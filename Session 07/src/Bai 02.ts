class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    public slowDown(amount: number): void {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`${this.name} đã giảm tốc, tốc độ hiện tại: ${this.speed} km/h`);
    }

    public speedUp(amount: number): void {
        this.speed += amount;
        console.log(`${this.name} đã tăng tốc, tốc độ hiện tại: ${this.speed} km/h`);
    }

    public showSpeed(): void {
        console.log(`Tốc độ hiện tại của ${this.name}: ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    public showInfo(): void {
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
