"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}
const emp = new Employee("Trang", "Tech Corp", "0123456789");
emp.printInfo();
const manager = new Manager("Bình", "Tech Corp", "0987654321", 10);
manager.printInfo();
